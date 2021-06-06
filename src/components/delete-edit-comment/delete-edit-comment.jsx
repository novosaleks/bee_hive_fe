import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { REMOVE_COMMENT } from '../../graphql/comment';
import { useNewComment } from '../../common/context/newCommentContext';

import DeleteEditIconsBlock from '../delete-edit-icons-block';
import { useNotificationService } from '../../common/context/notificationContext';

const DeleteEditComment = ({ commentId, handleEdit, authorId }) => {
    const [removeComment, { data }] = useMutation(REMOVE_COMMENT);
    const updateComments = useNewComment();

    const editComment = async () => {
        handleEdit(true);
    };

    const notify = useNotificationService();

    useEffect(() => {
        if (data) {
            const success = data.removeComment;
            if (success) {
                notify({ text: 'Success! The comment has been deleted!', type: 'success' });
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
            authorId={authorId}
        />
    );
};

export default DeleteEditComment;
