import { useState } from 'react';

import AlbumOpenModal from '../album-open-modal';
import AlbumsSlider from '../albums-slider';

const PhotoAlbum = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [description, setDescription] = useState(null);
    const [title, setTitle] = useState(null);
    const [albumId, setAlbumId] = useState(null);
    const [images, setImages] = useState();

    const handelClick = (description, title, albumId, images) => {
        setIsOpen(prevState => !prevState);
        setDescription(description);
        setTitle(title);
        setAlbumId(albumId);
        setImages(images);
    };

    return (
        <>
            <AlbumsSlider handelClick={handelClick} />
            {isOpen && (
                <AlbumOpenModal
                    {...{ description, title, albumId, images, setIsOpen }}
                />
            )}
        </>
    );
};

export default PhotoAlbum;
