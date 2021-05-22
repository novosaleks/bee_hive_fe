import React from 'react';
import MessagesOpenConversation from '../messages-open-conversation';
import MessagesSidebar from '../messages-sidebar';

import { MessagesDivBlock } from './messages.style';

// //NOT NESECCERY IN PROJECT
import { useConversations } from '../../common/context/conversationContext';

const Messages = ({ identifyUser }) => {
    const { selectedConversation } = useConversations();
    // const selectedConversation = false;

    return (
        <MessagesDivBlock conversationOpen={selectedConversation}>
            <MessagesSidebar identifyUser={identifyUser} />
            {selectedConversation && <MessagesOpenConversation />}
        </MessagesDivBlock>
    );
};

export default Messages;
