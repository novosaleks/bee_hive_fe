import MessagesConversationHeader from '../messages-conversation-header';
import MessagesChat from '../messages-chat';
import MessagesNewMessage from '../messages-new-message';
import { OpenConversationGroup } from './messages-open-conversation.style';

const MessagesOpenConversation = ({ handleClick }) => {
    return (
        <OpenConversationGroup className='open-conversation'>
            {/* user with whom we have the chat */}
            <MessagesConversationHeader event={handleClick} smallBlock />

            {/* our chat */}
            <MessagesChat />

            {/* create new message */}
            <MessagesNewMessage />
        </OpenConversationGroup>
    );
};

export default MessagesOpenConversation;
