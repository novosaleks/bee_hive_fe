import CloseContainer from '../close-container';

import {
    Input,
    Textarea,
    DropDownAlbum,
    ButtonsBlock,
    Submit,
} from './album-setting-modal.style';

const AlbumSettingsModal = ({
    left,
    right,
    bottom,
    isOpen,
    albomBlock,
    placeholderTitle,
    placeholderDescription,
}) => {
    const handleClick = () => {
        // handleEdit(false);
    };

    return (
        <DropDownAlbum {...{ left, right, bottom, isOpen, albomBlock }}>
            <Input
                type='text'
                placeholder={placeholderTitle || 'Title for your album'}
            />
            <Textarea
                placeholder={placeholderDescription || 'Album description'}
                rows='3'
            />
            <ButtonsBlock>
                <Submit type='submit'>Submit</Submit>
                <CloseContainer event={handleClick} />
            </ButtonsBlock>
        </DropDownAlbum>
    );
};

export default AlbumSettingsModal;
