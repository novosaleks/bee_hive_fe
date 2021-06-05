import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_PHOTO_ALBUM } from '../../graphql/photo-album';

import albumContext from '../../common/context/albumContext';
import RemovePhotoAlbum from '../remove-photo-album';
import CloseContainer from '../close-container';
import settings from '../../assets/settings.svg';

import { Header } from './album-title.style';
import { StyledDiv, StyledText } from '../../common/style/index';
import AlbumSettingsModal from '../album-setting-modal';

const AlbumTitle = ({ description, title, albumId, setIsOpen }) => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [updatePhotoAlbum, { data }] = useMutation(UPDATE_PHOTO_ALBUM);

    //update album, gql mutation

    // const { updateAlbums } = albumContext();

    useEffect(() => {
        if (data) {
            const response = data.updatePhotoAlbum;
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
        await updatePhotoAlbum({
            variables: {
                albumId: albumId,
                title: inputValue,
                description: textaraValue,
            },
        });
    };

    // open/close AlbumSettingsModal
    const handelClick = () => {
        setIsOpenModal(prevState => !prevState);
    };

    return (
        <StyledDiv>
            <Header>
                <img src={settings} alt='settings icon' onClick={handelClick} />
                <RemovePhotoAlbum {...{ setIsOpen, albumId }} />
                <CloseContainer
                    event={() => {
                        setIsOpen(false);
                    }}
                />
            </Header>
            {isOpenModal && (
                <AlbumSettingsModal
                    settingModal={true}
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
