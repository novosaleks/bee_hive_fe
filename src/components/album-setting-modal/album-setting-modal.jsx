import { useRef } from 'react';
import CloseContainer from '../close-container';

import {
    Input,
    Textarea,
    DropDownAlbum,
    ButtonsBlock,
    Submit,
} from './album-setting-modal.style';

const AlbumSettingsModal = ({
    right,
    bottom,
    isOpen,
    albomBlock,
    placeholderTitle,
    placeholderDescription,
    handelClick,
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
        <DropDownAlbum {...{ right, bottom, isOpen, albomBlock }}>
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
            <ButtonsBlock>
                <Submit onClick={setEmptyValuesAfterSubmit}>Submit</Submit>
                <CloseContainer event={handelClick} />
            </ButtonsBlock>
        </DropDownAlbum>
    );
};

export default AlbumSettingsModal;
