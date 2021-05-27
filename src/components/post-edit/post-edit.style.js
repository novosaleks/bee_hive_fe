import styled from 'styled-components';
import { getValueFromTheme } from '../../common/utils';
import { layout } from 'styled-system';

import arrow from '../../assets/arrow.png';

export const PostEditForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const TextareaDiv = styled.textarea`
    margin-top: 5%;
    padding: 2%;
    width: 100%;
    align-self: flex-end;
    ${layout};
    background-color: ${getValueFromTheme('primaryBgColorDiv')};
    color: ${getValueFromTheme('textColor')};
    box-shadow: inset 0 0 10px #fcfcd4;
`;

export const ButtonsBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
`;

export const SubmitButton = styled.button`
    align-self: flex-end;
    background: ${getValueFromTheme('primaryBgColor')};
    transform: rotateX(0.003deg);
    color: ${getValueFromTheme('primaryColor')};
    text-decoration: none;
    font-size: 1.2em;
    display: inline-block;
    font-family: Montserrat;
    text-transform: uppercase;
    text-align: center;
    border: 2px solid ${getValueFromTheme('primaryColor')};
    transition: 0.02s 0.2s cubic-bezier(0.1, 0, 0.1, 1);
    padding: 0.2%;
    margin-right: 1%;
    width: 40vh;
    &::before {
        content: '';
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
        right: 100%;
        bottom: 0;
        background: ${getValueFromTheme('primaryColor')};
        transition: 0.5s 0.2s cubic-bezier(0.1, 0, 0.1, 1),
            left 0.3s cubic-bezier(0.1, 0, 0.1, 1);
        z-index: -1;
    }

    &::after {
        content: '';
        display: inline-block;
        background-image: url(${arrow});
        position: absolute;
        top: 0;
        left: calc(100% - 3em);
        right: 3em;
        bottom: 0;
        background-size: 1.5em;
        background-repeat: no-repeat;
        background-position: center;
        transition: right 0.3s cubic-bezier(0.1, 0, 0.1, 1);
    }

    &:hover {
        &::before {
            left: calc(100% - 3em);
            right: 0;
            transition: 0.3s cubic-bezier(0.1, 0, 0.1, 1),
                left 0.3s 0.2s cubic-bezier(0.1, 0, 0.1, 1);
        }

        &::after {
            right: 0;
            transition: right 0.3s 0.2s cubic-bezier(0.1, 0, 0.1, 1);
        }
    }
`;

export const CloseContainer = styled.div`
    position: relative;
    align-self: flex-end;
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin-right: 2px;
    .leftright {
        height: 2px;
        width: 20px;
        position: absolute;
        margin-top: 24px;
        background-color: #f4a259;
        border-radius: 2px;
        transform: rotate(45deg);
        transition: all 0.3s ease-in;
    }

    .rightleft {
        height: 2px;
        width: 20px;
        position: absolute;
        margin-top: 24px;
        background-color: #f4a259;
        border-radius: 2px;
        transform: rotate(-45deg);
        transition: all 0.3s ease-in;
    }

    label {
        color: ${getValueFromTheme('textColor')};
        font-size: 0.6em;
        text-transform: uppercase;
        letter-spacing: 2px;
        transition: all 0.3s ease-in;
        opacity: 0;
        top: 110%;
        position: absolute;
        right: 15%;
    }

    &:hover .leftright {
        transform: rotate(-45deg);
        background-color: #f25c66;
    }
    &:hover .rightleft {
        transform: rotate(45deg);
        background-color: #f25c66;
    }
    &:hover label {
        opacity: 1;
    }
`;
