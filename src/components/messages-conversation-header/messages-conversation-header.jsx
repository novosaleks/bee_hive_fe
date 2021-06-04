import MessagesConversationRecipient from '../messages-conversation-recipient';

import {
    MessagesContactHeader,
    LeftArrow,
} from './messages-conversation-header.style';

const MessagesConversationHeader = ({ event, smallBlock }) => {
    return (
        <MessagesContactHeader>
            <LeftArrow onClick={event} />
            <MessagesConversationRecipient {...{ smallBlock }} />
        </MessagesContactHeader>
    );
};

export default MessagesConversationHeader;
