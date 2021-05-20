import React from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_POST, REMOVE_POST } from '../../graphql/post';
import editIcon from '../../assets/editIcon.svg';
import deleteIcon from '../../assets/deleteIcon.svg';

import { DeleteEditPostDiv, StyledImg } from './delete-edit-post.style';
const DeleteEditPost = () => {
    const [updatePost, { error }] = useMutation(UPDATE_POST);
    const [removePost, { error }] = useMutation(REMOVE_POST);

    // const [text, setText] = useState('');

    const editPost = () => {
        // updatePost({
        //     variables: {
        //         text: text,
        //     },
        // })
        //  if (error) {
        //     console.log(error);
        //  }
    };

    const deletePost = () => {
        //   removePost({
        //       variables: {
        //           postId: postId,
        //       },
        //   });
        //  if (error) {
        //     console.log(error);
        //  }
    };
    return (
        <DeleteEditPostDiv>
            <StyledImg src={editIcon} alt="edit post" onClick={editPost} />

            <StyledImg
                src={deleteIcon}
                alt="delete post"
                onClick={deletePost}
            />
        </DeleteEditPostDiv>
    );
};

export default DeleteEditPost;
