import { useState } from 'react';
import MessagesOpenConversation from '../messages-open-conversation';
import MessagesSidebar from '../messages-sidebar';

import { SearchContactsTitle } from '../../common/style/index';
import { MessagesDivBlock, NotificationDiv } from './messages.style';
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
                <MessagesOpenConversation handleClick={handleClick} />
            )}
        </MessagesDivBlock>
    );
};

export default Messages;
