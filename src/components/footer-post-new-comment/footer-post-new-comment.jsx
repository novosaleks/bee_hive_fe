import { useEffect, useRef } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../../graphql/comment';

import CloseContainer from '../close-container';

import {
    TextareaDiv,
    AddCommentForm,
    ButtonsBlock,
} from './footer-post-new-comment.style';
import { SubmitButton } from '../../common/style';
const FooterPostNewComment = ({ updateComments, setOpenNewCommentState }) => {
    const [addComment, { data }] = useMutation(ADD_COMMENT);
    const textareaRef = useRef();

    useEffect(() => {
        if (data) {
            const success = data.addComment;
            if (success) {
                // TODO add a notification
                console.log('Success! The new comment has been added!');
                textareaRef.current.value = '';
                // updateComments();
            }
        }
    }, [data]);

    const handleSubmit = async () => {
        await addComment({
            variables: {
                content: textareaRef.current.value,
            },
        });
    };

    const handleClick = () => {
        setOpenNewCommentState(false);
    };
    return (
        <AddCommentForm onSubmit={handleSubmit}>
            <TextareaDiv ref={textareaRef} />
            <ButtonsBlock>
                <SubmitButton type='submit'>Submit</SubmitButton>
                <CloseContainer event={handleClick} />
            </ButtonsBlock>
        </AddCommentForm>
    );
};

export default FooterPostNewComment;
