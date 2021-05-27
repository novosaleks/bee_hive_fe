import React from 'react';
import UserAvatar from '../user-avatar';

import { useConversationContext } from '../../common/context/conversationContext';
import { StyledDiv, DivLine } from '../../common/style/index';
import {
    ConversationStyledDiv,
    ContactInfoDiv,
    ConversationsBlockStyled,
} from './messages-conversations.style';

const MessagesConversations = ({ smallBlock }) => {
    const { conversations, selectConversationIndex, selectedConversation } =
        useConversationContext();

    return (
        <ConversationsBlockStyled>
            {conversations.map((conversation, index) => {
                const lastMessage = selectedConversation.messages.length - 1;

                return (
                    <StyledDiv key={index}>
                        <ConversationStyledDiv
                            onClick={() => selectConversationIndex(index)}
                            className={conversation.selected ? 'active' : null}
                        >
                            <StyledDiv direction="row" content="flex-start">
                                <UserAvatar
                                    rating={'#C53B0E'}
                                    rateScore={'1,5'}
                                    width={smallBlock ? 70 : [70, 135]}
                                    height={smallBlock ? 70 : [70, 135]}
                                    {...{ smallBlock }}
                                />
                                <ContactInfoDiv content="flex-start" ml="3px">
                                    {conversation.recipients
                                        .map((r) => r.name)
                                        .join(', ')}
                                    <span>
                                        {0 <= lastMessage &&
                                            selectedConversation.messages[
                                                lastMessage
                                            ].text}
                                    </span>
                                </ContactInfoDiv>
                            </StyledDiv>
                        </ConversationStyledDiv>
                        <DivLine backgroundColor="#C4C4C4" />
                    </StyledDiv>
                );
            })}
        </ConversationsBlockStyled>
    );
};

export default MessagesConversations;
