import AlbumsProvider from '../../common/context/albumContext';
import AlbumsBlock from '../../components/albums-block';
import useAlbums from '../../common/hooks/useAlbums';

const AlbumsContainer = ({ user }) => {
    const albumsValue = useAlbums(user.id);
    return (
        <AlbumsProvider value={albumsValue}>
            <AlbumsBlock />
        </AlbumsProvider>
    );
};

export default AlbumsContainer;
