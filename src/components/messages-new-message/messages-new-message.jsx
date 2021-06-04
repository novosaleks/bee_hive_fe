import { useState } from 'react';

import { useConversationContext } from '../../common/context/conversationContext';

import { SendButton } from './messages-new-message.style';
import { StyledDiv, Input } from '../../common/style';

const MessagesNewMessage = () => {
    const [text, setText] = useState('');
    const { sendMessage, selectedConversation } = useConversationContext();

    const handleSubmit = e => {
        e.preventDefault();

        text !== '' && sendMessage(selectedConversation.recipients, text);
        setText('');
    };
    return (
        <StyledDiv direction='row' mt={1} content='space-between'>
            <Input
                placeholder='Type ...'
                value={text}
                onChange={e => setText(e.target.value)}
                mr={3}
                style={{ height: '45px', width: '50vw' }}
            />
            <SendButton onClick={handleSubmit} className='send-button'>
                Send
            </SendButton>
        </StyledDiv>
    );
};

export default MessagesNewMessage;
