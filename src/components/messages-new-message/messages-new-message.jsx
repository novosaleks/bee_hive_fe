import { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { SEND_MESSAGE } from '../../graphql/message';
import { useNotificationService } from '../../common/context/notificationContext';

import { SendButton } from './messages-new-message.style';
import { StyledDiv, Input } from '../../common/style';

const MessagesNewMessage = ({ id, updateMessages }) => {
    const [text, setText] = useState('');
    const notify = useNotificationService();
    const [sendMessage, { data }] = useMutation(SEND_MESSAGE);
    useEffect(() => {
        if (data) {
            const response = data.sendMessage;
            if (response.success) {
                updateMessages();
            } else {
                notify({ text: response.message, type: 'fail' });
            }
        }
    }, [data]);
    const sendMessageToUser = async (recipient, text) => {
        await sendMessage({
            variables: { recipientId: recipient, text: text },
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        text !== '' && sendMessageToUser(id, text);
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
