import { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { REMOVE_POST } from '../../graphql/post';
import editIcon from '../../assets/editIcon.svg';
import deleteIcon from '../../assets/deleteIcon.svg';
import { DeleteEditPostDiv, StyledImg } from './delete-edit-post.style';
import { useUpdateWall } from '../../common/context/updateWallContext';
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '../../graphql/user';

const DeleteEditPost = ({ postId, authorId, handleEdit }) => {
    const [removePost, { data }] = useMutation(REMOVE_POST);
    const { loading, error, data: userData } = useQuery(GET_CURRENT_USER);
    const [currentUserId, setCurrentUserId] = useState(null);
    const updateWall = useUpdateWall();
    const { userId: profileId } = useParams();

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

    useEffect(() => {
        if (userData) {
            setCurrentUserId(userData.currentUser.id);
        }
    }, [userData]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{`Error! ${error.message}`}</div>;

    const deletePost = async () => {
        await removePost({
            variables: {
                postId,
            },
        });
    };
    return (
        <>
            {currentUserId && (
                <DeleteEditPostDiv>
                    {/* if it's our post show edit post button */}
                    {currentUserId === authorId && (
                        <StyledImg
                            src={editIcon}
                            alt='edit post'
                            onClick={editPost}
                        />
                    )}

                    {/* if it's our post or our wall show delete post button */}
                    {(currentUserId === authorId ||
                        currentUserId === profileId) && (
                        <StyledImg
                            src={deleteIcon}
                            alt='delete post'
                            onClick={deletePost}
                        />
                    )}
                </DeleteEditPostDiv>
            )}
        </>
    );
};

export default DeleteEditPost;
