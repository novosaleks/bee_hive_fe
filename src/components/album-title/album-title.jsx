import { useState, useEffect, useRef } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_ALBUM } from '../../graphql/album';

import albumContext from '../../common/context/albumContext';
import CloseContainer from '../close-container';
import settings from '../../assets/settings.svg';

import { Header } from './album-title.style';
import { StyledDiv, StyledText } from '../../common/style/index';
import AlbumSettingsModal from '../album-setting-modal';

const AlbumTitle = ({ description, title, albumId, setIsOpen }) => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [headerLeft, setHeaderLeft] = useState(null);
    const [updateAlbum, { data }] = useMutation(UPDATE_ALBUM);

    //update album, gql mutation

    // const { updateAlbums } = albumContext();

    useEffect(() => {
        if (data) {
            const success = data.updateAlbum;
            if (success) {
                console.log('Success! You updated the album!');
                setIsOpenModal(false);
                // updateAlbums();
            }
        }
    }, [data]);

    const handleSubmit = async (inputValue, textaraValue) => {
        await updateAlbum({
            variables: {
                albumId: albumId,
                title: inputValue,
                description: textaraValue,
            },
        });
    };

    //define AlbumSettingsModal absolute position
    const HeaderRef = useRef();
    const resizeHandler = () => {
        setHeaderLeft(HeaderRef.current?.getBoundingClientRect().left);
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
            <Header ref={HeaderRef}>
                <img src={settings} alt='settings icon' onClick={handelClick} />
                <CloseContainer
                    event={() => {
                        setIsOpen(false);
                    }}
                />
            </Header>
            {isOpenModal && (
                <AlbumSettingsModal
                    bottom={60}
                    right={headerLeft}
                    isOpen={isOpenModal}
                    placeholderTitle='New title'
                    placeholderDescription='New description'
                    handelClick={handelClick}
                    handleSubmit={handleSubmit}
                />
            )}
            <StyledText fontSize='1.2rem' mt='5px'>
                {title || 'Photo album'}
            </StyledText>
            <StyledText fontSize='1.6rem'>Your Pictures</StyledText>
            <StyledText>
                {description ||
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
            </StyledText>
        </StyledDiv>
    );
};

export default AlbumTitle;
