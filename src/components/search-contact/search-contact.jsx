import { StyledDiv } from '../../common/style/index';
import UserAvatar from '../user-avatar';
import PostAuthorAndData from '../post-author-and-data';
import { useConversationContext } from '../../common/context/conversationContext';
import { ContactsDiv } from './search-contact.style';

const SearchContact = ({
    smallBlock,
    contactSearch,
    event,
    users,
    contactID,
}) => {
    const { selectedConversation } = useConversationContext();
    const recipient = selectedConversation?.recipient;

    const contact = contactSearch
        ? users?.find(contact => contact.id === contactID)
        : users?.find(contact => contact.id === recipient.id);

    const handleClick = () => {
        if (contactSearch) {
            event();
        }
    };
    return (
        <ContactsDiv contactSearch={contactSearch} onClick={handleClick}>
            <UserAvatar
                rating={contact?.ratingColor || '#C53B0E'}
                rateScore={contact?.rateScore || '1,5'}
                photo={contact?.photo}
                width={70}
                height={70}
                {...{ smallBlock }}
            />
            <StyledDiv width='90%' align='flex-end' ml='20px'>
                <PostAuthorAndData
                    name={
                        recipient?.name ||
                        `${contact.firstName} ${contact.lastName}`
                    }
                    date={contact?.status || 'Online'}
                    color={contact?.statusColor || '#5DAC38'}
                />
            </StyledDiv>
        </ContactsDiv>
    );
};

export default SearchContact;
