import CloseContainer from '../close-container';

import { ButtonsBlock } from './bottons-submit-close.style';
import { SubmitButton } from '../../common/style';

const ButtonsSubmitClose = ({
    handleClickClose,
    handleClickSubmit,
    settingModal,
}) => {
    return (
        <ButtonsBlock settingModal={settingModal}>
            <SubmitButton type='submit' onClick={handleClickSubmit}>
                Submit
            </SubmitButton>
            <CloseContainer event={handleClickClose} />
        </ButtonsBlock>
    );
};

export default ButtonsSubmitClose;
