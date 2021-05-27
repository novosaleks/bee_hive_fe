import React from 'react';

import {
    MessagesChatHeaderDiv,
    ImgMessagesChatHeaderDiv,
    ContactsInfoMessagesChatHeader,
    NameMessagesChatHeaderDiv,
    MembersMessagesChatHeaderDiv,
} from './messages-chat-header.style';
import { StyledDiv, DivLine } from '../../common/style/index';
import { useConversationContext } from '../../common/context/conversationContext';

const MessagesChatHeader = () => {
    const { selectedConversation } = useConversationContext();
    const recipients = selectedConversation.recipients;
    return (
        <MessagesChatHeaderDiv>
            <ImgMessagesChatHeaderDiv />
            <ContactsInfoMessagesChatHeader>
                <StyledDiv align='flex-start'>
                    <NameMessagesChatHeaderDiv>
                        {recipients.map((r) => r.name).join(', ')}
                    </NameMessagesChatHeaderDiv>
                    <MembersMessagesChatHeaderDiv fontSize={'0.7em'}>
                        {recipients.length} members
                    </MembersMessagesChatHeaderDiv>
                </StyledDiv>
                <DivLine />
            </ContactsInfoMessagesChatHeader>
        </MessagesChatHeaderDiv>
    );
};

export default MessagesChatHeader;
