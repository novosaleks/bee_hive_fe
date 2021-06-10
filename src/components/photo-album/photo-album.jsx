import { useState, useEffect } from 'react';

import AlbumOpenModal from '../album-open-modal';
import AlbumsSlider from '../albums-slider';

const PhotoAlbum = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [description, setDescription] = useState(null);
    const [title, setTitle] = useState(null);
    const [albumId, setAlbumId] = useState(null);

    const handleClick = (description, title, albumId) => {
        setIsOpen(prevState => !prevState);
        setDescription(description);
        setTitle(title);
        setAlbumId(albumId);
    };

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }, []);

    return (
        <>
            <AlbumsSlider handleClick={handleClick} />
            {isOpen && (
                <AlbumOpenModal
                    {...{ description, title, albumId, setIsOpen }}
                />
            )}
        </>
    );
};

export default PhotoAlbum;
