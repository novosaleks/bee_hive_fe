import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { REMOVE_POST } from '../../graphql/post';
import { useUpdateWall } from '../../common/context/updateWallContext';

import DeleteEditIconsBlock from '../delete-edit-icons-block';
import { useNotificationService } from '../../common/context/notificationContext';

const DeleteEditPost = ({ postId, authorId, handleEdit }) => {
    const [removePost, { data }] = useMutation(REMOVE_POST);
    const updateWall = useUpdateWall();

    const editPost = async () => {
        handleEdit(true);
    };

    const notify = useNotificationService();

    useEffect(() => {
        if (data) {
            const response = data.removePost;
            if (response) {
                notify({ text: response.message, type: 'success' });
                updateWall();
            } else {
                notify({ text: response.message, type: 'fail' });
            }
        }
    }, [data]);

    const deletePost = async () => {
        await removePost({
            variables: {
                postId,
            },
        });
    };
    return (
        <DeleteEditIconsBlock
            editComponent={editPost}
            deleteComponent={deletePost}
            authorId={authorId}
        />
    );
};

export default DeleteEditPost;
