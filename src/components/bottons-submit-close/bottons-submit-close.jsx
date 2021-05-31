import CloseContainer from '../close-container';

import { ButtonsBlock } from './bottons-submit-close.style';
import { SubmitButton } from '../../common/style';

const ButtonsSubmitClose = ({ handleClickClose, handleClickSubmit }) => {
    return (
        <ButtonsBlock>
            <SubmitButton type='submit' onClick={handleClickSubmit}>
                Submit
            </SubmitButton>
            <CloseContainer event={handleClickClose} />
        </ButtonsBlock>
    );
};

export default ButtonsSubmitClose;
