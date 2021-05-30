import { useEffect, useRef } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_POST } from '../../graphql/post';

import CloseContainer from '../close-container';
<<<<<<< HEAD
import {
    TextareaDiv,
    PostEditForm,
    SubmitButton,
    ButtonsBlock,
} from './post-edit.style';
import { useUpdateWall } from '../../common/context/updateWallContext';
=======
import { TextareaDiv, PostEditForm, ButtonsBlock } from './post-edit.style';
import { SubmitButton } from '../../common/style';
import { useUpdatePublications } from '../../common/context/updatePublicationsContext';
>>>>>>> dce35c2... added style to albums and modified dropdown menu

const PostEdit = ({ postId, text, handleEdit }) => {
    const [updatePost, { data }] = useMutation(UPDATE_POST);
    const inputRef = useRef();
    const updateWall = useUpdateWall();

    useEffect(() => {
        if (data) {
            const success = data.updatePost;
            if (success) {
                // TODO add a notification
                console.log('Success! The post has been edited!');
                handleEdit(false);
                updateWall();
            }
        }
    }, [data]);

    const handleSubmit = async e => {
        e.preventDefault();
        await updatePost({
            variables: { postId: postId, text: inputRef.current.value },
        });
    };

    const handleClick = () => {
        handleEdit(false);
    };

    return (
        <>
            <PostEditForm onSubmit={handleSubmit}>
                <TextareaDiv ref={inputRef} defaultValue={text} />
                <ButtonsBlock>
                    <SubmitButton type='submit'>Submit</SubmitButton>
                    <CloseContainer event={handleClick} />
                </ButtonsBlock>
            </PostEditForm>
        </>
    );
};

export default PostEdit;
