import styled from 'styled-components';
import { getValueFromTheme } from '../../common/utils';

export const AlbumOpenModalDiv = styled.div`
    position: absolute;
    top: 5%;
    color: #4e4e4e;
    width: 50vw;
    padding-top: 5px;
    min-height: 90vh;
    z-index: 3;
    background-color: ${getValueFromTheme('primaryBgColorDiv')};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
    }
    .backdrop img {
        display: block;
        max-width: 60%;
        max-height: 80%;
        margin: 60px auto;
        box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
        border: 3px solid white;
    }
`;
