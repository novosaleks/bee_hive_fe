import { useState } from 'react';

import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '../../graphql/user';

import editIcon from '../../assets/editIcon.svg';
import deleteIcon from '../../assets/deleteIcon.svg';

import { DeleteEditDiv, StyledImg } from './delete-edit-icons-block.style';

const DeleteEditIconsBlock = ({ editComponent, deleteComponent, authorId }) => {
    const { loading, error, data: userData } = useQuery(GET_CURRENT_USER);
    const [currentUserId, setCurrentUserId] = useState(null);
    const { userId: profileId } = useParams();
    useEffect(() => {
        if (userData) {
            setCurrentUserId(userData.currentUser.id);
        }
    }, [userData]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{`Error! ${error.message}`}</div>;
    return (
        <>
            {currentUserId && (
                <DeleteEditDiv>
                    {/* if it's our post show edit post button */}
                    {currentUserId === authorId && (
                        <StyledImg
                            src={editIcon}
                            alt='edit post'
                            onClick={editComponent}
                        />
                    )}

                    {/* if it's our post or our wall show delete post button */}
                    {(currentUserId === authorId ||
                        currentUserId === profileId) && (
                        <StyledImg
                            src={deleteIcon}
                            alt='delete post'
                            onClick={deleteComponent}
                        />
                    )}
                </DeleteEditDiv>
            )}
        </>
    );
};

export default DeleteEditIconsBlock;
