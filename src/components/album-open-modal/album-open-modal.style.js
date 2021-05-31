import styled from 'styled-components';
import { getValueFromTheme } from '../../common/utils';

export const Window = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 3;
`;

export const AlbumOpenModalDiv = styled.div`
    position: absolute;
    top: 3%;
    left: 30%;
    bottom: 3%;
    color: #4e4e4e;
    width: 50vw;
    padding-top: 5px;
    height: ${document.documentElement.clientHeight - 50}px;
    background-color: ${getValueFromTheme('primaryBgColorDiv')};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5);
    }
    .backdrop-img {
        display: block;
        max-width: 50%;
        max-height: 60%;
        margin: 20px auto;
        box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
        border: 3px solid white;
    }
    @media (max-width: 700px) {
        left: 10%;
        width: 80vw;
    }
`;
