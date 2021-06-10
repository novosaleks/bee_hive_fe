import styled, { css } from 'styled-components';
import { StyledDiv } from '../../common/style';
import { getValueFromTheme } from '../../common/utils';

export const OpenConversationDiv = styled(StyledDiv)`
    background-color: ${getValueFromTheme('searchContactsBgColor')};
    overflow: auto;
    flex-grow: 1;
    justify-content: flex-start;
`;
export const MessageDiv = styled(StyledDiv)`
    align-items: flex-start;
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
                  border: 1px solid #f8f9fa;
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
