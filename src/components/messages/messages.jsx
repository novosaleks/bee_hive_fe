import React from 'react';
import MessagesOpenConversation from '../messages-open-conversation';
import MessagesSidebar from '../messages-sidebar';

import {
    MessagesDivBlock,
    NotificationDiv,
    NotificationTitle,
} from './messages.style';

// //NOT NESECCERY IN PROJECT
import { useConversations } from '../../common/context/conversationContext';

const Messages = ({ identifyUser }) => {
    const { selectedConversation } = useConversations();
    // const selectedConversation = false;

    return (
        <MessagesDivBlock conversationOpen={selectedConversation}>
            <MessagesSidebar
                identifyUser={identifyUser}
                conversationOpen={selectedConversation}
            />
            {!selectedConversation && (
                <NotificationDiv>
                    <NotificationTitle>
                        You do not have selected conversations yet
                    </NotificationTitle>
                </NotificationDiv>
            )}
            {selectedConversation && (
                <MessagesOpenConversation style={{ height: '400px' }} />
            )}
        </MessagesDivBlock>
    );
};

export default Messages;
