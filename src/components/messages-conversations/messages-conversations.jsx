import UserAvatar from '../user-avatar';

import { useConversationContext } from '../../common/context/conversationContext';
import { StyledDiv, DivLine } from '../../common/style/index';
import {
    ConversationStyledDiv,
    ContactInfoDiv,
    ConversationsBlockStyled,
} from './messages-conversations.style';

const MessagesConversations = ({ smallBlock, handleClick }) => {
    const { conversations, selectConversationIndex } = useConversationContext();

    return (
        <ConversationsBlockStyled className='conversations'>
            {conversations?.map((conversation, index) => {
                const lastMessage = conversation.messages.length - 1;

                return (
                    <StyledDiv key={index} onClick={handleClick}>
                        <ConversationStyledDiv
                            onClick={() => selectConversationIndex(index)}
                            className={conversation.selected ? 'active' : null}>
                            <StyledDiv
                                direction='row'
                                content='flex-start'
                                align='flex-start'>
                                <UserAvatar
                                    rating={'#C53B0E'}
                                    rateScore={'1,5'}
                                    width={smallBlock ? 70 : [70, 135]}
                                    height={smallBlock ? 70 : [70, 135]}
                                    {...{ smallBlock }}
                                />
                                <ContactInfoDiv content='flex-start' ml='3px'>
                                    {conversation.recipient.name}
                                    <span>
                                        {0 <= lastMessage &&
                                            conversation.messages[lastMessage]
                                                .text}
                                    </span>
                                </ContactInfoDiv>
                            </StyledDiv>
                        </ConversationStyledDiv>
                        <DivLine backgroundColor='#C4C4C4' />
                    </StyledDiv>
                );
            })}
        </ConversationsBlockStyled>
    );
};

export default MessagesConversations;
