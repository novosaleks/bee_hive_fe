import { useState } from 'react';
import AlbumTitle from '../album-title';
import AlbumUploadForm from '../album-upload-form';
import AlbumImageGrid from '../album-image-grid';
import AlbumPhotoModal from '../album-photo-modal';

import { AlbumOpenModalDiv, Window } from './album-open-modal.style';

const AlbumOpenModal = ({ description, title, setIsOpen }) => {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <Window>
            <AlbumOpenModalDiv>
                <AlbumTitle {...{ description, title, setIsOpen }} />

                <AlbumUploadForm />
                <AlbumImageGrid setSelectedImg={setSelectedImg} />
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
