import { StyledDiv } from '../../common/style/index';
import UserAvatar from '../user-avatar';
import PostAuthorAndData from '../post-author-and-data';
import { ContactsDiv } from './search-contact.style';

const SearchContact = ({
    smallBlock,
    contactSearch,
    event,
    users,
    contactID,
}) => {
    const contact = users?.find(contact => contact.id === contactID);

    const handleClick = () => {
        if (contactSearch === 'messages') return event();
    };
    return (
        <ContactsDiv onClick={handleClick}>
            <UserAvatar
                rateScore={contact?.karma || '0'}
                photo={contact?.avatar?.url}
                width={70}
                height={70}
                {...{ smallBlock }}
            />
            <StyledDiv width='90%' align='flex-end' ml='20px'>
                <PostAuthorAndData
                    name={`${contact.firstName} ${contact.lastName}`}
                    date={contact?.status || 'Online'}
                    color={contact?.statusColor || '#5DAC38'}
                    authorId={contactID}
                />
            </StyledDiv>
        </ContactsDiv>
    );
};

export default SearchContact;
