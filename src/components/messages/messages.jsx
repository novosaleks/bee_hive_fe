import MessagesOpenConversation from '../messages-open-conversation';
import MessagesSidebar from '../messages-sidebar';

import { SearchContactsTitle } from '../../common/style/index';
import { MessagesDivBlock, NotificationDiv } from './messages.style';
import { useConversationContext } from '../../common/context/conversationContext';

const Messages = ({ identifyUser }) => {
    const { selectedConversation } = useConversationContext();

    return (
        <MessagesDivBlock conversationOpen={selectedConversation}>
            <MessagesSidebar
                identifyUser={identifyUser}
                conversationOpen={selectedConversation}
            />
            {!selectedConversation && (
                <NotificationDiv>
                    <SearchContactsTitle>
                        You do not have selected conversations yet
                    </SearchContactsTitle>
                </NotificationDiv>
            )}
            {selectedConversation && <MessagesOpenConversation />}
        </MessagesDivBlock>
    );
};

export default Messages;
