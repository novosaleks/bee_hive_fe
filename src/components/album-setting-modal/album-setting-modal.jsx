import { Input, Textarea, DropDownAlbum } from './album-setting-modal.style';

const AlbumSettingsModal = ({
    right,
    bottom,
    isOpen,
    placeholderTitle,
    placeholderDescription,
}) => {
    return (
        <DropDownAlbum {...{ right, bottom, isOpen }}>
            <Input
                type='text'
                placeholder={placeholderTitle || 'Title for your album'}
            />
            <Textarea
                placeholder={placeholderDescription || 'Album description'}
                rows='3'
            />
        </DropDownAlbum>
    );
};

export default AlbumSettingsModal;
