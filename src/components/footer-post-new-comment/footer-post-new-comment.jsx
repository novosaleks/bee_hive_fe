import { useEffect, useRef } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../../graphql/comment';

import CloseContainer from '../close-container';
import { useNewComment } from '../../common/context/newCommentContext';

import {
    TextareaDiv,
    AddCommentForm,
    ButtonsBlock,
} from './footer-post-new-comment.style';
import { SubmitButton } from '../../common/style';
import { useNotificationService } from '../../common/context/notificationContext';

const FooterPostNewComment = ({
    setOpenNewCommentState,
    componentId,
    reply,
    addresseeId,
    addresCommentId,
}) => {
    const [addComment, { data }] = useMutation(ADD_COMMENT);
    const textareaRef = useRef();

    const updateComments = useNewComment();
    const addresId = addresseeId || '';
    const addrCommentId = addresCommentId || '';

    const notify = useNotificationService();

    useEffect(() => {
        if (data) {
            const success = data.addComment;
            if (success) {
                notify({
                    text: 'Success! The new comment has been added!',
                    type: 'success',
                });
                textareaRef.current.value = '';
                updateComments();
            }
        }
    }, [data]);

    const handleSubmit = async () => {
        await addComment({
            variables: {
                componentId: componentId,
                content: textareaRef.current.value,
                reply: reply,
                addresseeId: addresId,
                addresCommentId: addrCommentId,
            },
        });
    };

    const handleClick = () => {
        setOpenNewCommentState(false);
    };
    return (
        <AddCommentForm onSubmit={handleSubmit} className='comment-form'>
            <TextareaDiv ref={textareaRef} />
            <ButtonsBlock>
                <SubmitButton type='submit'>Submit</SubmitButton>
                <CloseContainer event={handleClick} />
            </ButtonsBlock>
        </AddCommentForm>
    );
};

export default FooterPostNewComment;
