import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { REMOVE_COMMENT } from '../../graphql/comment';
import { useNewComment } from '../../common/context/newCommentContext';

import DeleteEditIconsBlock from '../delete-edit-icons-block';

const DeleteEditComment = ({ commentId, handleEdit }) => {
    const [removeComment, { data }] = useMutation(REMOVE_COMMENT);
    const updateComments = useNewComment();

    const editComment = async () => {
        handleEdit(true);
    };

    useEffect(() => {
        if (data) {
            const success = data.removeComment;
            if (success) {
                // TODO add a notification
                console.log('Success! The comment has been deleted!');
                updateComments();
            }
        }
    }, [data]);

    const deleteComment = async () => {
        await removeComment({
            variables: {
                commentId,
            },
        });
    };

    return (
        <DeleteEditIconsBlock
            editComponent={editComment}
            deleteComponent={deleteComment}
        />
    );
};

export default DeleteEditComment;
