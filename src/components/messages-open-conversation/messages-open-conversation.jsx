import { useEffect, useState } from 'react';
import MessagesConversationHeader from '../messages-conversation-header';
import MessagesChat from '../messages-chat';
import MessagesNewMessage from '../messages-new-message';
import { GET_MESSAGES_BY_USER_ID } from '../../graphql/message';
import useQueriedData from '../../common/hooks/useQueriedData';
import { OpenConversationGroup } from './messages-open-conversation.style';

const MessagesOpenConversation = ({ handleClick, userId }) => {
    const [messages, setMessages] = useState(null);
    //get all messages with certain user
    const { data, fallback, refetch } = useQueriedData(
        GET_MESSAGES_BY_USER_ID,
        {
            variables: { userId: userId },
        }
    );

    //get data by the query GET_MESSAGES_BY_USER_ID, if we have new userId or data
    useEffect(() => {
        if (data) {
            setMessages(data.getMessagesByUserId);
        }
    }, [data]);
    const updateMessages = () => {
        refetch();
    };

    if (fallback) {
        return fallback;
    }

    return (
        <OpenConversationGroup className='open-conversation'>
            {/* user with whom we have the chat */}
            <MessagesConversationHeader event={handleClick} smallBlock />

            {/* our chat */}
            <MessagesChat messages={messages} />

            {/* create new message */}
            <MessagesNewMessage id={userId} updateMessages={updateMessages} />
        </OpenConversationGroup>
    );
};

export default MessagesOpenConversation;
