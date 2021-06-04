import ConversationProvider from '../../common/context/conversationContext';
import Messages from '../../components/messages';
import useConversation from '../../common/hooks/useConversation';

import ContactProvider from '../../common/context/contactContext';
import useContact from '../../common/hooks/useContact';

const MessageContainer = ({ identifyUser }) => {
    const conversationValue = useConversation(identifyUser);
    const users = useContact();

    return (
        <ContactProvider value={users}>
            <ConversationProvider value={conversationValue}>
                <Messages identifyUser={identifyUser} />
            </ConversationProvider>
        </ContactProvider>
    );
};

export default MessageContainer;
