import UserAvatar from '../user-avatar';
import { useEffect, useState } from 'react';
import { GET_MESSAGES_BY_USER_ID } from '../../graphql/message';
import useQueriedData from '../../common/hooks/useQueriedData';
import { useConversationContext } from '../../common/context/conversationContext';
import { StyledDiv, DivLine } from '../../common/style/index';
import {
    ConversationStyledDiv,
    ContactInfoDiv,
    ConversationsBlockStyled,
} from './messages-conversations.style';

const MessagesConversations = ({ smallBlock, handleClick }) => {
    const { conversations, selectConversationIndex, selectedConversation } =
        useConversationContext();
    const [messages, setMessages] = useState(null);
    //get all messages with certain user
    const { data } = useQueriedData(GET_MESSAGES_BY_USER_ID, {
        variables: { userId: selectedConversation?.recipient.id },
        pollInterval: 500,
    });

    //get data by the query GET_MESSAGES_BY_USER_ID, if we have new userId or data
    useEffect(() => {
        if (data) {
            const messages = data.getMessagesByUserId;
            setMessages(messages);
        }
    }, [data]);

    return (
        <ConversationsBlockStyled className='conversations'>
            {conversations?.map((conversation, index) => {
                const contact = conversation?.recipient.contact;
                const lastMessage = messages?.length - 1;

                return (
                    <StyledDiv key={index} onClick={handleClick}>
                        <ConversationStyledDiv
                            onClick={() => selectConversationIndex(index)}
                            className={
                                conversation?.selected ? 'active' : null
                            }>
                            <StyledDiv direction='row' content='flex-start'>
                                <UserAvatar
                                    rateScore={contact?.karma || '0'}
                                    photo={contact?.avatar?.url}
                                    width={smallBlock ? 70 : [70, 135]}
                                    height={smallBlock ? 70 : [70, 135]}
                                    {...{ smallBlock }}
                                />
                                <ContactInfoDiv ml='3px'>
                                    {conversation?.recipient.name}
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
