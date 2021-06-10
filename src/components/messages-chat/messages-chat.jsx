import { useCallback, useState, useEffect } from 'react';
import { GET_CURRENT_USER } from '../../graphql/user';
import useQueriedData from '../../common/hooks/useQueriedData';

import {
    OpenConversationDiv,
    MessageDiv,
    Message,
    MessageText,
    MessageSender,
} from './messages-chat.style';

const MessagesChat = ({ messages }) => {
    const { data: userData, fallback } = useQueriedData(GET_CURRENT_USER);
    const [currentUserId, setCurrentUserId] = useState(null);

    useEffect(() => {
        if (userData) {
            setCurrentUserId(userData.currentUser.id);
        }
    }, [userData]);

    const setRef = useCallback(node => {
        if (node) {
            node.scrollIntoView({ smooth: true });
        }
    }, []);

    return (
        fallback || (
            <OpenConversationDiv>
                <MessageDiv>
                    {messages?.map((message, index) => {
                        const lastMessage = messages?.length - 1 === index;
                        const fromMe = message?.author.id === currentUserId;
                        return (
                            <Message
                                ref={lastMessage ? setRef : null}
                                key={index}
                                fromMe={fromMe}>
                                <MessageText fromMe={fromMe}>
                                    {message?.text}
                                </MessageText>
                                <MessageSender fromMe={fromMe}>
                                    {fromMe ? 'You' : message?.author.firstName}
                                </MessageSender>
                            </Message>
                        );
                    })}
                </MessageDiv>
            </OpenConversationDiv>
        )
    );
};

export default MessagesChat;
