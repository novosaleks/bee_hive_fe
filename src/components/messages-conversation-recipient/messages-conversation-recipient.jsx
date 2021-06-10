import { useConversationContext } from '../../common/context/conversationContext';

import UserAvatar from '../user-avatar';
import PostAuthorAndData from '../post-author-and-data';

import { ContactsDiv } from './messages-conversation-recipient.style';
import { StyledDiv } from '../../common/style/index';

const MessagesConversationRecipient = ({ smallBlock }) => {
    const { selectedConversation } = useConversationContext();
    const recipient = selectedConversation?.recipient;
    const contact = recipient?.contact;
    return (
        <ContactsDiv>
            <UserAvatar
                rateScore={contact?.karma || '0'}
                photo={contact?.avatar?.url}
                width={70}
                height={70}
                {...{ smallBlock }}
            />
            <StyledDiv width='90%' align='flex-end' ml='20px'>
                <PostAuthorAndData
                    name={recipient?.name}
                    date={contact?.status || 'Online'}
                    color={contact?.statusColor || '#5DAC38'}
                    authorId={recipient?.id}
                />
            </StyledDiv>
        </ContactsDiv>
    );
};

export default MessagesConversationRecipient;
