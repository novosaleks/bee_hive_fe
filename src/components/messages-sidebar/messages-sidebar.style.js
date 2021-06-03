import styled, { css } from 'styled-components';
import { StyledDiv, Button, media } from '../../common/style/index';

export const MessagesSidebarStyled = styled(StyledDiv)`
    justify-content: flex-start;
    align-self: self-start;
    ${props =>
        props.conversationOpen &&
        css`
            margin-right: 5%;
            grid-area: 1 / 1 / 2 / 2;
        `}
`;

export const NewConversationButton = styled(Button)`
    font-size: 1.3rem;
    width: 100%;
    margin-bottom: 5%;
    ${media.mobile} {
        font-size: 0.9rem;
    }
`;

export const ModalDialog = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 4;
`;
export const ModalContent = styled.div`
    display: block;
    max-width: 80%;
    max-height: 60%;
    margin: 20px auto;
    box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
    background-color: #fff;
`;
