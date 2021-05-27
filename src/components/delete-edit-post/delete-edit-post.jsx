import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { REMOVE_POST } from '../../graphql/post';
import editIcon from '../../assets/editIcon.svg';
import deleteIcon from '../../assets/deleteIcon.svg';
import { DeleteEditPostDiv, StyledImg } from './delete-edit-post.style';
import { useUpdatePublications } from '../../common/context/updatePublicationsContext';

const DeleteEditPost = ({ postId, handleEdit }) => {
    const [removePost, { data }] = useMutation(REMOVE_POST);
    const updatePublications = useUpdatePublications();

    const editPost = async () => {
        handleEdit(true);
    };

    useEffect(() => {
        if (data) {
            const success = data.removePost;
            if (success) {
                // TODO add a notification
                console.log('Success! The post has been deleted!');
                updatePublications();
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
