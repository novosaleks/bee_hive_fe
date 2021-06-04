import { useConversationContext } from '../../common/context/conversationContext';
import { useContactContext } from '../../common/context/contactContext';

import UserAvatar from '../user-avatar';
import PostAuthorAndData from '../post-author-and-data';

import { ContactsDiv } from './messages-conversation-recipient.style';
import { StyledDiv } from '../../common/style/index';

const MessagesConversationRecipient = ({ smallBlock }) => {
    const { selectedConversation } = useConversationContext();
    const users = useContactContext();

    const recipient = selectedConversation?.recipient;
    const contact = users?.find(contact => contact.id === recipient.id);
    return (
        <ContactsDiv>
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
                    name={recipient?.name}
                    date={contact?.status || 'Online'}
                    color={contact?.statusColor || '#5DAC38'}
                />
            </StyledDiv>
        </ContactsDiv>
    );
};

export default MessagesConversationRecipient;
