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

const FooterPostNewComment = ({
    setOpenNewCommentState,
    reply,
    addresseeId,
    replyContent,
}) => {
    const [addComment, { data }] = useMutation(ADD_COMMENT);
    const textareaRef = useRef();

    const updateComments = useNewComment();
    const addresId = addresseeId || '';
    const replyCont = replyContent || '';

    useEffect(() => {
        if (data) {
            const success = data.addComment;
            if (success) {
                // TODO add a notification
                console.log('Success! The new comment has been added!');
                textareaRef.current.value = '';
                updateComments();
            }
        }
    }, [data]);

    const handleSubmit = async () => {
        await addComment({
            variables: {
                content: textareaRef.current.value,
                reply: reply,
                addresseeId: addresId,
                replyContent: replyCont,
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
