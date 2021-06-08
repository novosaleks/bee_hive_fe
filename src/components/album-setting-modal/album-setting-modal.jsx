import { useRef } from 'react';
import ButtonsSubmitClose from '../bottons-submit-close';
import { Input, Textarea, DropDownAlbum } from './album-setting-modal.style';

const AlbumSettingsModal = ({
    right,
    bottom,
    isOpen,
    albumBlock,
    settingModal,
    placeholderTitle,
    placeholderDescription,
    handleClick,
    handleSubmit,
}) => {
    //get current value from input/textarea
    const textareaRef = useRef();
    const inputRef = useRef();

    const setEmptyValuesAfterSubmit = () => {
        handleSubmit(inputRef.current.value, textareaRef.current.value);
        inputRef.current.value = '';
        textareaRef.current.value = '';
    };

    return (
        <DropDownAlbum {...{ right, bottom, isOpen, albumBlock, settingModal }}>
            <Input
                type='text'
                placeholder={placeholderTitle || 'Title for your album'}
                ref={inputRef}
            />
            <Textarea
                placeholder={placeholderDescription || 'Album description'}
                rows='3'
                ref={textareaRef}
            />
            <ButtonsSubmitClose
                handleClickClose={handleClick}
                handleClickSubmit={setEmptyValuesAfterSubmit}
                settingModal={true}
            />
        </DropDownAlbum>
    );
};

export default AlbumSettingsModal;
