import React, { useEffect, useRef } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_POST } from '../../graphql/post';

import {
    TextareaDiv,
    PostEditForm,
    SubmitButton,
    CloseContainer,
    ButtonsBlock,
} from './post-edit.style';

const PostEdit = ({ postId, text, handleEdit, updatePublications }) => {
    const [updatePost, { data }] = useMutation(UPDATE_POST);
    const inputRef = useRef();

    useEffect(() => {
        if (data) {
            const success = data.updatePost;
            if (success) {
                // TODO add a notification
                console.log("Success! The post has been edited!");
                handleEdit(false);
                updatePublications();
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
                    <CloseContainer onClick={handleClick}>
                        <div className='leftright'></div>
                        <div className='rightleft'></div>
                        <label className='close'>close</label>
                    </CloseContainer>
                </ButtonsBlock>
            </PostEditForm>
        </>
    );
};

export default PostEdit;
