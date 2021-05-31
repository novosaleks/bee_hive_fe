import styled from 'styled-components';
import { getValueFromTheme } from '../../common/utils';

export const ImgModal = styled.div`
    background-color: ${getValueFromTheme('primaryBgColorDiv')};
    padding: 5%;
    display: flex;
    flex-direction: column;
    box-sizing: content-box;
    width: 60%;
    margin: 3% auto;
    overflow: auto;
    max-height: 80%;
    &::-webkit-scrollbar {
        width: 3px;
        background-color: #f9f9fd;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: #4a8367;
    }
    &::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: #f9f9fd;
    }
`;
