import { useState } from 'react';
import AlbumTitle from '../album-title';
import AlbumUploadForm from '../album-upload-form';
import AlbumImageGrid from '../album-image-grid';
import AlbumPhotoModal from '../album-photo-modal';

import { AlbumOpenModalDiv, Window } from './album-open-modal.style';

const AlbumOpenModal = ({ description, title, albumId, images, setIsOpen }) => {
    const [selectedImg, setSelectedImg] = useState(null);
    const [selectedImgId, setSelectedImgId] = useState(null);

    return (
        <Window>
            <AlbumOpenModalDiv>
                <AlbumTitle {...{ description, title, albumId, setIsOpen }} />

                <AlbumUploadForm albumId={albumId} />
                <AlbumImageGrid
                    {...{ images, setSelectedImgId, setSelectedImg }}
                />
                {selectedImg && (
                    <AlbumPhotoModal
                        selectedImg={selectedImg}
                        setSelectedImg={setSelectedImg}
                        photoId={selectedImgId}
                    />
                )}
            </AlbumOpenModalDiv>
        </Window>
    );
};

export default AlbumOpenModal;
