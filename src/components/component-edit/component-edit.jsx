import ButtonsSubmitClose from '../bottons-submit-close';

import { TextareaDiv, ComponentEditForm } from './component-edit.style';

const ComponentEdit = ({ handleSubmit, inputRef, text, handleClickClose }) => {
    return (
        <ComponentEditForm onSubmit={handleSubmit}>
            <TextareaDiv ref={inputRef} defaultValue={text} />
            <ButtonsSubmitClose handleClickClose={handleClickClose} />
        </ComponentEditForm>
    );
};

export default ComponentEdit;
