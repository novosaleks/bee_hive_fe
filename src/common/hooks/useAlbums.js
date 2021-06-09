import { useState, useEffect } from 'react';
import { GET_PHOTO_ALBUMS_BY_USER_ID } from '../../graphql/photo-album';
import useQueriedData from './useQueriedData';

const useAlbums = id => {
    const [albums, setAlbums] = useState([]);
    const { fallback, data, refetch } = useQueriedData(
        GET_PHOTO_ALBUMS_BY_USER_ID,
        {
            variables: { userId: id },
        }
    );

    useEffect(() => {
        if (data) {
            setAlbums(data.getPhotoAlbumsByUserId);
        }
    }, [data]);

    if (fallback) {
        return fallback;
    }

    const updateAlbums = () => {
        refetch();
    };
    return {
        albums,
        updateAlbums,
    };
};

export default useAlbums;
