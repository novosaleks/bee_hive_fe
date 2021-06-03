import styled, { css } from 'styled-components';
import { StyledDiv, Button } from '../../common/style';
import { getValueFromTheme } from '../../common/utils';
export const OpenConversationGroup = styled(StyledDiv)`
    grid-area: 1 / 2 / 2 / 5;
    flex-grow: 2;
    margin-left: 3%;
    overflow: auto;
    height: 98vh;
    margin-bottom: 1%;

    @media (max-width: 400px) {
        .post-author {
            font-size: 1em;
        }
        .send-button {
            width: 100%;
        }
    }
`;
export const OpenConversationDiv = styled(StyledDiv)`
    background-color: ${getValueFromTheme('searchContactsBgColor')};
    overflow: auto;
    flex-grow: 1;
    justify-content: flex-start;
    &&::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
        background-color: #f9f9fd;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${getValueFromTheme('searchContactsBgColor')};
        background-image: -webkit-gradient(
            linear,
            0 0,
            0 100%,
            color-stop(0.5, rgba(255, 255, 255, 0.25)),
            color-stop(0.5, transparent),
            to(transparent)
        );
    }
`;
export const MessageDiv = styled(StyledDiv)`
    align-items: start;
    justify-self: end;
    padding: 5px;
`;
export const SendButton = styled(Button)`
    width: 15vw;
    font-size: 1rem;
    margin-right: 3%;
`;
export const MessagesContactHeader = styled(StyledDiv)`
    flex-direction: row;
    @media (max-width: 400px) {
        width: 86vw;
        margin-left: 6%;
        .user-avatar {
            height: 55px;
            min-width: 30px;
            width: 60px;
            border-width: 2px;
        }
    }
`;

export const LeftArrow = styled.button`
    display: none;
    width: 30px;
    height: 30px;
    transition: 0.3s;
    box-shadow: -3px 3px 0 rgba(0, 0, 0, 0.5);
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    transition: 0.5s;
    transform: rotate(45deg);
    margin-left: 10px;
    &hover {
        box-shadow: -3px 3px 0 rgba(255, 255, 255);
    }
    @media (max-width: 700px) {
        display: flex;
    }
    @media (max-width: 400px) {
        margin-left: 5px;
    }
`;

export const Message = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    ${props =>
        props.fromMe
            ? css`
                  align-self: flex-end;
                  align-items: flex-end;
              `
            : css`
                  align-items: start;
              `}
`;
export const MessageText = styled.div`
    border-radius: 5px;
    padding: 0.25rem;
    word-break: break-word;
    overflow-y: hidden;
    max-width: 45vw;
    ${props =>
        props.fromMe
            ? css`
                  background: #f8f9fa;
                  color: #6c757d;
              `
            : css`
                  border-color: #f8f9fa;
                  color: #f8f9fa;
              `}
`;
export const MessageSender = styled.div`
    color: #f8f9fa;
    font-size: 80%;
    font-weight: 400;
    ${props =>
        props.fromMe &&
        css`
            text-align: right;
        `}
`;
