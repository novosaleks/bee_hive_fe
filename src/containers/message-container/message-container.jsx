import ConversationProvider from '../../common/context/conversationContext';
import Messages from '../../components/messages';
import useConversation from '../../common/hooks/useConversation';

const MessageContainer = ({ identifyUser }) => {
    const conversationValue = useConversation(identifyUser);

    return (
        <ConversationProvider value={conversationValue}>
            <Messages identifyUser={identifyUser} />
        </ConversationProvider>
    );
};

export default MessageContainer;
