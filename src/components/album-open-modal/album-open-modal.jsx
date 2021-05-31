import { useState } from 'react';
import AlbumTitle from '../album-title';
import AlbumUploadForm from '../album-upload-form';
import AlbumImageGrid from '../album-image-grid';
import AlbumPhotoModal from '../album-photo-modal';

import { AlbumOpenModalDiv, Window } from './album-open-modal.style';

const AlbumOpenModal = ({ description, title, albumId, images, setIsOpen }) => {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <Window>
            <AlbumOpenModalDiv>
                <AlbumTitle {...{ description, title, albumId, setIsOpen }} />

                <AlbumUploadForm albumId={albumId} />
                <AlbumImageGrid
                    setSelectedImg={setSelectedImg}
                    {...{ albumId, images }}
                />
                {selectedImg && (
                    <AlbumPhotoModal
                        selectedImg={selectedImg}
                        setSelectedImg={setSelectedImg}
                    />
                )}
            </AlbumOpenModalDiv>
        </Window>
    );
};

export default AlbumOpenModal;
