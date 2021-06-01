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

    @media(max-width: 700px) {
        display: none;
    }
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
    display: block;
    position: fixed;
    width: 100%;
    height: 100%;
    margin: 0.5rem auto;
    pointer-events: none;
    transition: transform 0.3s ease-out;
    @media (min-width: 576px) {
        max-width: 500px;
        margin: 1.75rem auto;
    }
`;
export const ModalContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    outline: 0;
`;
