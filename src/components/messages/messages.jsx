import { useState } from 'react';
import MessagesOpenConversation from '../messages-open-conversation';
import MessagesSidebar from '../messages-sidebar';

import { SearchContactsTitle, NotificationDiv } from '../../common/style/index';
import { MessagesDivBlock } from './messages.style';
import { useConversationContext } from '../../common/context/conversationContext';

const Messages = () => {
    const { selectedConversation } = useConversationContext();

    const [stateSidebar, setStateSidebar] = useState(false);

    const handleClick = () => {
        setStateSidebar(prevState => !prevState);
    };
    return (
        <MessagesDivBlock
            conversationOpen={selectedConversation}
            stateSidebar={stateSidebar}>
            <MessagesSidebar
                conversationOpen={selectedConversation}
                handleClick={handleClick}
            />
            {!selectedConversation && (
                <NotificationDiv>
                    <SearchContactsTitle>
                        You do not have selected conversations yet
                    </SearchContactsTitle>
                </NotificationDiv>
            )}

            {selectedConversation && (
                <MessagesOpenConversation
                    handleClick={handleClick}
                    userId={selectedConversation?.recipient.id}
                />
            )}
        </MessagesDivBlock>
    );
};

export default Messages;
