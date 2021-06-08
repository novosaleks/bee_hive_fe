import { useState, useEffect } from 'react';
import { GET_CURRENT_USER } from '../../graphql/user';
import { useParams } from 'react-router';
import useQueriedData from '../../common/hooks/useQueriedData';
import { useMutation } from '@apollo/client';
import { REMOVE_PHOTO_ALBUM } from '../../graphql/photo-album';

// import albumContext from '../../common/context/albumContext';

import deleteIcon from '../../assets/deleteIcon.svg';

import { DeleteImg } from './remove-photo-album.style';
import { useNotificationService } from '../../common/context/notificationContext';

const RemovePhotoAlbum = ({ setIsOpen, albumId }) => {
    const [userData, fallback] = useQueriedData(GET_CURRENT_USER);
    const [removePhotoAlbum, { data }] = useMutation(REMOVE_PHOTO_ALBUM);

    const [currentUserId, setCurrentUserId] = useState(null);
    const { userId: profileId } = useParams();
    useEffect(() => {
        if (userData) {
            setCurrentUserId(userData.currentUser.id);
        }
    }, [userData]);

    const notify = useNotificationService();

    //remove album, gql mutation

    // const { updateAlbums } = albumContext();

    useEffect(() => {
        if (data) {
            const response = data.removePhotoAlbum;
            if (response.success) {
                notify({ text: response.message, type: 'success' });
                setIsOpen(false);
                // updateAlbums();
            } else {
                notify({ text: response.message, type: 'fail' });
            }
        }
    }, [data]);

    const handelClick = async () => {
        await removePhotoAlbum({
            variables: {
                photoAlbumId: albumId,
            },
        });
    };
    return (
        fallback || (
            <>
                {currentUserId === profileId && (
                    <DeleteImg
                        src={deleteIcon}
                        alt='delete post'
                        onClick={handelClick}
                    />
                )}
            </>
        )
    );
};

export default RemovePhotoAlbum;
