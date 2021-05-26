import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_POST, REMOVE_POST } from '../../graphql/post';
import editIcon from '../../assets/editIcon.svg';
import deleteIcon from '../../assets/deleteIcon.svg';

import { DeleteEditPostDiv, StyledImg } from './delete-edit-post.style';
const DeleteEditPost = ({ postId }) => {
    const [updatePost, { data: updateData }] = useMutation(UPDATE_POST);
    const [removePost, { data: deleteData }] = useMutation(REMOVE_POST);

    const [text, setText] = useState('');

    const editPost = async () => {
        await updatePost({
            variables: {
                text
            },
        });
    };

    useEffect(() => {
        if (deleteData) {
            const success = deleteData.removePost;
            if (success) {
                console.log("Success!");
                // TODO after removal reload the component, not the page
                window.location.reload();
            }
        }
    }, [deleteData]);

    const deletePost = async () => {
        await removePost({
            variables: {
                 postId
            },
        });
    };
    return (
        <DeleteEditPostDiv>
            <StyledImg src={editIcon} alt='edit post' onClick={editPost} />

            <StyledImg
                src={deleteIcon}
                alt='delete post'
                onClick={deletePost}
            />
        </DeleteEditPostDiv>
    );
};

export default DeleteEditPost;
