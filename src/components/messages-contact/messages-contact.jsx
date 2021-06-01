import { StyledDiv } from '../../common/style/index';
import UserAvatar from '../user-avatar';
import PostAuthorAndData from '../post-author-and-data';
import { useContactContext } from '../../common/context/contactContext';
import { useConversationContext } from '../../common/context/conversationContext';
import { MessagesContactsDiv } from './messages-contact.style';

const MessagesContact = ({
    smallBlock,
    contactSearch,
    contactID,
    status,
    ratingColor,
    statusColor,
    rateScore,
    photo,
}) => {
    const { selectedConversation } = useConversationContext();
    const availableContacts = useContactContext();
    const recipients = selectedConversation && selectedConversation.recipients;

    const contact =
        contactID &&
        availableContacts.find(contact => contact.id === contactID);
    const contactName = contact && `${contact.firstName} ${contact.lastName}`;
    //make GQL query by id of the recipeint to find all needed info about the user:
    //status,
    // ratingColor,
    // statusColor,
    // rateScore,
    // photo

    return (
        <MessagesContactsDiv contactSearch={contactSearch}>
            <UserAvatar
                rating={ratingColor || '#C53B0E'}
                rateScore={rateScore || '1,5'}
                photo={photo}
                width={70}
                height={70}
                {...{ smallBlock }}
            />
            <StyledDiv width='90%' align='flex-end' ml='20px'>
                <PostAuthorAndData
                    name={
                        contactSearch
                            ? contactName
                            : recipients.map(r => r.name).join(', ')
                    }
                    data={status || 'Online'}
                    color={statusColor || '#5DAC38'}
                />
            </StyledDiv>
        </MessagesContactsDiv>
    );
};

export default MessagesContact;
