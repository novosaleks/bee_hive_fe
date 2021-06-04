import SearchContact from '../search-contact';

import {
    MessagesContactHeader,
    LeftArrow,
} from './messages-conversation-header.style';

const MessagesConversationHeader = ({ event, contactSearch, smallBlock }) => {
    return (
        <MessagesContactHeader>
            <LeftArrow onClick={event} />
            <SearchContact {...{ contactSearch, smallBlock }} />
        </MessagesContactHeader>
    );
};

export default MessagesConversationHeader;
