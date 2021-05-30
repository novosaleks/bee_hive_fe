import styled from 'styled-components';
import { getValueFromTheme } from '../../common/utils';
export const CloseContainerDiv = styled.div`
    position: relative;
    align-self: flex-end;
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin-right: 2px;
    .leftright,
    .rightleft {
        height: 2px;
        width: 20px;
        position: absolute;
        margin-top: 14px;
        background-color: #f4a259;
        border-radius: 2px;
        transform: rotate(45deg);
        transition: all 0.3s ease-in;
    }
    .rightleft {
        transform: rotate(-45deg);
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
    @media (max-width: 495px) {
        width: 20px;
        height: 20px;
        .leftright,
        .rightleft {
            height: 1px;
            width: 15px;
        }
    }
`;
