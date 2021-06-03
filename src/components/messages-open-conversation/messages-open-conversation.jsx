import { useState, useCallback } from 'react';
import { StyledDiv, Input } from '../../common/style';
import { useConversationContext } from '../../common/context/conversationContext';
import {
    OpenConversationGroup,
    OpenConversationDiv,
    MessageDiv,
    SendButton,
    MessagesContactHeader,
    LeftArrow,
    Message,
    MessageText,
    MessageSender,
} from './messages-open-conversation.style';
import MessagesContact from '../messages-contact';
const MessagesOpenConversation = ({ handleClick }) => {
    const [text, setText] = useState('');
    const setRef = useCallback(node => {
        if (node) {
            node.scrollIntoView({ smooth: true });
        }
    }, []);
    const { sendMessage, selectedConversation } = useConversationContext();

    const handleSubmit = e => {
        e.preventDefault();

        text !== '' && sendMessage(selectedConversation.recipients, text);
        setText('');
    };

    return (
        <OpenConversationGroup className='open-conversation'>
            {/* user with whom we have the chat */}
            <MessagesContactHeader>
                <LeftArrow onClick={handleClick} />
                <MessagesContact contactSearch={false} smallBlock />
            </MessagesContactHeader>

            {/* our chat */}
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
                                    {message.fromMe
                                        ? 'You'
                                        : message.senderName}
                                </MessageSender>
                            </Message>
                        );
                    })}
                </MessageDiv>
            </OpenConversationDiv>

            <StyledDiv direction='row' mt={1} content='space-between'>
                <Input
                    placeholder='Type ...'
                    value={text}
                    onChange={e => setText(e.target.value)}
                    mr={3}
                    style={{ height: '45px', width: '50vw' }}
                />
                <SendButton onClick={handleSubmit} className='send-button'>
                    Send
                </SendButton>
            </StyledDiv>
        </OpenConversationGroup>
    );
};

export default MessagesOpenConversation;
