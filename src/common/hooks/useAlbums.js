import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_ALBUMS_BY_USER_ID } from '../../graphql/album';

const useAlbums = id => {
    const [albums, setAlbums] = useState([]);
    const { loading, error, data, refetch } = useQuery(
        GET_ALL_ALBUMS_BY_USER_ID,
        {
            variables: { userId: id },
        }
    );

    useEffect(() => {
        if (data) {
            setAlbums(data.getAllAlbumsByUserId);
        }
    }, [data]);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{`Error ${error.message}`}</div>;

    const updateAlbums = () => {
        refetch();
    };
    return {
        albums,
        updateAlbums,
    };
};

export default useAlbums;
