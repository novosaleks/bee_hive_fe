import styled, { css } from 'styled-components';

const CSS__settingModal_BOTTONS_BLOCK = css`
    align-self: flex-end;
`;

const CSS__settingModal_BOTTON_SUBMIT = css`
    width: 23vh;
    @media (max-width: 600px) {
        width: 17vh;
    }
`;

export const ButtonsBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    ${props => props.settingModal && CSS__settingModal_BOTTONS_BLOCK}
    button[type='submit'] {
        ${props => props.settingModal && CSS__settingModal_BOTTON_SUBMIT}
    }
`;
