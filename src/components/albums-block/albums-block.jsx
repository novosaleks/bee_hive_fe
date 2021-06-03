import { useState, useEffect, useRef } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ALBUM } from '../../graphql/album';

import albumContext from '../../common/context/albumContext';
import PhotoAlbum from '../photo-album';

import add from '../../assets/add.svg';
import { TitleDiv } from './albums-block.style';
import { StyledDiv, StyledText, DivLine } from '../../common/style/index';
import AlbumSettingsModal from '../album-setting-modal';

const AlbumsBlock = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [headerBottom, setHeaderBottom] = useState(null);
    const [addAlbum, { data }] = useMutation(ADD_ALBUM);

    //add album, gql mutation

    // const { updateAlbums } = albumContext();

    useEffect(() => {
        if (data) {
            const success = data.addAlbum;
            if (success) {
                console.log('Success! The new album has been added!');
                setIsOpenModal(false);
                // updateAlbums();
            }
        }
    }, [data]);

    const handleSubmit = async (inputValue, textaraValue) => {
        await addAlbum({
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
