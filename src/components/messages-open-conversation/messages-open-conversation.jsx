import React, { useState, useCallback } from 'react';
import { StyledDiv, Input } from '../../common/style';
import { useConversationContext } from '../../common/context/conversationContext';
import {
    OpenConversationGroup,
    OpenConversationDiv,
    MessageDiv,
    SendButton,
} from './messages-open-conversation.style';
import MessagesContact from '../messages-contact';
import MessagesChatHeader from '../messages-chat-header';
const MessagesOpenConversation = () => {
    const [text, setText] = useState('');
    const setRef = useCallback((node) => {
        if (node) {
            node.scrollIntoView({ smooth: true });
        }
    }, []);
    const { sendMessage, selectedConversation } = useConversationContext();

    function handleSubmit(e) {
        e.preventDefault();

        text !== '' && sendMessage(selectedConversation.recipients, text);
        setText('');
    }

    return (
        <OpenConversationGroup>
            {selectedConversation.recipients.length !== 1 ? (
                <MessagesChatHeader />
            ) : (
                <MessagesContact contactSearch={false} smallBlock />
            )}

            <OpenConversationDiv>
                <MessageDiv>
                    {selectedConversation.messages.map((message, index) => {
                        const lastMessage =
                            selectedConversation.messages.length - 1 === index;
                        return (
                            <div
                                ref={lastMessage ? setRef : null}
                                key={index}
                                className={`my-1 d-flex flex-column ${
                                    message.fromMe
                                        ? 'align-self-end align-items-end'
                                        : 'align-items-start'
                                }`}
                            >
                                <div
                                    className={`rounded px-2 py-1 ${
                                        message.fromMe
                                            ? 'bg-light text-muted'
                                            : 'border'
                                    }`}
                                >
                                    {message.text}
                                </div>
                                <div
                                    className={`text-light small ${
                                        message.fromMe ? 'text-right ' : ''
                                    }`}
                                >
                                    {message.fromMe
                                        ? 'You'
                                        : message.senderName}
                                </div>
                            </div>
                        );
                    })}
                </MessageDiv>
            </OpenConversationDiv>
            <StyledDiv direction="row" mt={1} content="space-between">
                <Input
                    placeholder="Type ..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    mr={3}
                    style={{ height: '45px', width: '50vw' }}
                />
                <SendButton onClick={handleSubmit}>Send</SendButton>
            </StyledDiv>
        </OpenConversationGroup>
    );
};

export default MessagesOpenConversation;
