import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { REMOVE_POST } from '../../graphql/post';
import { useUpdateWall } from '../../common/context/updateWallContext';

import DeleteEditIconsBlock from '../delete-edit-icons-block';

const DeleteEditPost = ({ postId, authorId, handleEdit }) => {
    const [removePost, { data }] = useMutation(REMOVE_POST);
    const updateWall = useUpdateWall();

    const editPost = async () => {
        handleEdit(true);
    };

    useEffect(() => {
        if (data) {
            const success = data.removePost;
            if (success) {
                // TODO add a notification
                console.log('Success! The post has been deleted!');
                updateWall();
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
