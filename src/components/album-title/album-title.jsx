import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_PHOTO_ALBUM } from '../../graphql/photo-album';

import RemovePhotoAlbum from '../remove-photo-album';
import CloseContainer from '../close-container';
import settings from '../../assets/settings.svg';

import { Header } from './album-title.style';
import { StyledDiv, StyledText } from '../../common/style/index';
import AlbumSettingsModal from '../album-setting-modal';
import { useNotificationService } from '../../common/context/notificationContext';

const AlbumTitle = ({ description, title, albumId, setIsOpen }) => {
    const [isOpenModal, setIsOpenModal] = useState(false)

    const [updatePhotoAlbum] = useMutation(UPDATE_PHOTO_ALBUM, {
        onCompleted: (data) => {
            const response = data.updatePhotoAlbum;
            if (response.success) {
                notify({ text: response.message, type: 'success' });
                setIsOpenModal(false);
                // updateAlbums();
            } else {
                notify({ text: response.message, type: 'fail' });
            }
        },
    });

    const notify = useNotificationService();

    const handleSubmit = async (inputValue, textareaValue) => {
        await updatePhotoAlbum({
            variables: {
                photoAlbumId: albumId,
                title: inputValue,
                description: textareaValue,
            },
        });
    };

    // open/close AlbumSettingsModal
    const handleClick = () => {
        setIsOpenModal(prevState => !prevState);
    };

    return (
        <StyledDiv>
            <Header>
                <img src={settings} alt='settings icon' onClick={handleClick} />
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
                    handleClick={handleClick}
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
