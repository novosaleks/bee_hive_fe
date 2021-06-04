import { useCallback } from 'react';
import { useConversationContext } from '../../common/context/conversationContext';
import {
    OpenConversationDiv,
    MessageDiv,
    Message,
    MessageText,
    MessageSender,
} from './messages-chat.style';

const MessagesChat = () => {
    const setRef = useCallback(node => {
        if (node) {
            node.scrollIntoView({ smooth: true });
        }
    }, []);
    const { selectedConversation } = useConversationContext();
    return (
        <OpenConversationDiv>
            <MessageDiv>
                {selectedConversation.messages.map((message, index) => {
                    const lastMessage =
                        selectedConversation.messages.length - 1 === index;
                    return (
                        <Message
                            ref={lastMessage ? setRef : null}
                            key={index}
                            fromMe={message.fromMe}>
                            <MessageText fromMe={message.fromMe}>
                                {message.text}
                            </MessageText>
                            <MessageSender fromMe={message.fromMe}>
                                {message.fromMe ? 'You' : message.senderName}
                            </MessageSender>
                        </Message>
                    );
                })}
            </MessageDiv>
        </OpenConversationDiv>
    );
};

export default MessagesChat;
