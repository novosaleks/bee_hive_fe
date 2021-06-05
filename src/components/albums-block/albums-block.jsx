import { useState, useEffect, useRef } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_PHOTO_ALBUM } from '../../graphql/photo-album';

import albumContext from '../../common/context/albumContext';
import PhotoAlbum from '../photo-album';

import add from '../../assets/add.svg';
import { TitleDiv } from './albums-block.style';
import { StyledDiv, StyledText, DivLine } from '../../common/style/index';
import AlbumSettingsModal from '../album-setting-modal';

const AlbumsBlock = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [headerBottom, setHeaderBottom] = useState(null);
    const [createPhotoAlbum, { data }] = useMutation(CREATE_PHOTO_ALBUM);

    //add album, gql mutation

    // const { updateAlbums } = albumContext();

    useEffect(() => {
        if (data) {
            const response = data.createPhotoAlbum;
            if (response.success) {
                // TODO add a notification
                console.log(response.message);
                setIsOpenModal(false);
                // updateAlbums();
            } else {
                // TODO add a notification
                console.error(response.message);
            }
        }
    }, [data]);

    const handleSubmit = async (inputValue, textaraValue) => {
        await createPhotoAlbum({
            variables: {
                title: inputValue,
                description: textaraValue,
            },
        });
    };

    //define AlbumSettingsModal absolute position
    const HeaderRef = useRef();
    const resizeHandler = () => {
        setHeaderBottom(
            HeaderRef.current?.getBoundingClientRect().bottom +
                window.pageYOffset
        );
    };
    useEffect(() => {
        window.addEventListener('resize', resizeHandler, true);
        resizeHandler();
        return () => {
            window.removeEventListener('resize', resizeHandler, true);
        };
    }, [isOpenModal]);

    // open/close AlbumSettingsModal
    const handelClick = () => {
        setIsOpenModal(prevState => !prevState);
    };

    return (
        <StyledDiv>
            <TitleDiv>
                <StyledText> Photo albums</StyledText>
                <img
                    src={add}
                    alt='add new photo album icon'
                    onClick={handelClick}
                    ref={HeaderRef}
                />
            </TitleDiv>
            <DivLine />
            {isOpenModal && (
                <AlbumSettingsModal
                    bottom={headerBottom + 10}
                    isOpen={isOpenModal}
                    albomBlock={true}
                    handelClick={handelClick}
                    handleSubmit={handleSubmit}
                />
            )}
            <PhotoAlbum />
        </StyledDiv>
    );
};

export default AlbumsBlock;
