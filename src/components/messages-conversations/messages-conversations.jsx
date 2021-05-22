import React from 'react';
import { useConversations } from '../../common/context/conversationContext';
import { StyledDiv, DivLine } from '../../common/style/index';
import { ConversationStyledDiv } from './messages-conversations.style';
const MessagesConversations = () => {
    const { conversations, selectConversationIndex } = useConversations();

    return (
        <StyledDiv>
            {conversations.map((conversation, index) => (
                <StyledDiv key={index}>
                    <ConversationStyledDiv
                        onClick={() => selectConversationIndex(index)}
                        className={conversation.selected ? 'active' : null}
                    >
                        {conversation.recipients.map((r) => r.name).join(', ')}
                    </ConversationStyledDiv>
                    <DivLine backgroundColor="#C4C4C4" />
                </StyledDiv>
            ))}
        </StyledDiv>
    );
};

export default MessagesConversations;
