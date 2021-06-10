import { useState } from 'react';
import AlbumTitle from '../album-title';
import AlbumUploadForm from '../album-upload-form';
import AlbumImageGrid from '../album-image-grid';
import AlbumPhotoModal from '../album-photo-modal';

import { AlbumOpenModalDiv, Window } from './album-open-modal.style';
import useQueriedData from '../../common/hooks/useQueriedData';
import { GET_PHOTOS_BY_PHOTO_ALBUM_ID } from '../../graphql/photo';

const AlbumOpenModal = ({ description, title, albumId, setIsOpen }) => {
    const [selectedImg, setSelectedImg] = useState(null);
    const [selectedImgId, setSelectedImgId] = useState(null);

    const { data, fallback } = useQueriedData(GET_PHOTOS_BY_PHOTO_ALBUM_ID, {
        variables: {photoAlbumId: albumId}
    });

    const images = data?.getPhotosByPhotoAlbumId;

    return (
        fallback ||
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
