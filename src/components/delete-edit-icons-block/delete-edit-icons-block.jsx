import { useState, useEffect } from 'react';

import { useParams } from 'react-router';
import { GET_CURRENT_USER } from '../../graphql/user';

import editIcon from '../../assets/editIcon.svg';
import deleteIcon from '../../assets/deleteIcon.svg';

import { DeleteEditDiv, StyledImg } from './delete-edit-icons-block.style';
import useQueriedData from '../../common/hooks/useQueriedData';

const DeleteEditIconsBlock = ({ editComponent, deleteComponent, authorId }) => {
    const {data: userData, fallback} = useQueriedData(GET_CURRENT_USER);
    const [currentUserId, setCurrentUserId] = useState(null);
    const { userId: profileId } = useParams();
    useEffect(() => {
        if (userData) {
            setCurrentUserId(userData.currentUser.id);
        }
    }, [userData]);

    return (fallback ||
        <>
            {currentUserId && (
                <DeleteEditDiv className='delete-edit-icons'>
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
