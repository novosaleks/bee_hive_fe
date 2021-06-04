import styled, { css } from 'styled-components';
import { StyledDiv, Button } from '../../common/style';
import { getValueFromTheme } from '../../common/utils';

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
