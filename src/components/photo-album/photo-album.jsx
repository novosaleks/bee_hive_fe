import { useState, useEffect } from 'react';

import AlbumOpenModal from '../album-open-modal';
import AlbumsSlider from '../albums-slider';

const PhotoAlbum = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [description, setDescription] = useState(null);
    const [title, setTitle] = useState(null);
    const [albumId, setAlbumId] = useState(null);
    const [images, setImages] = useState();

    const handleClick = (description, title, albumId, images) => {
        setIsOpen(prevState => !prevState);
        setDescription(description);
        setTitle(title);
        setAlbumId(albumId);
        setImages(images);
    };
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }, [isOpen]);

    return (
        <>
            <AlbumsSlider handleClick={handleClick} />
            {isOpen && (
                <AlbumOpenModal
                    {...{ description, title, albumId, images, setIsOpen }}
                />
            )}
        </>
    );
};

export default PhotoAlbum;
