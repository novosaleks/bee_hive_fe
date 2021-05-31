import styled from 'styled-components';

import { getValueFromTheme } from '../../common/utils';
import { StyledDiv } from '../../common/style/index';

export const AlbomsBlock = styled(StyledDiv)`
    flex-direction: row;
    justify-content: space-between;
`;

export const PhotoAlbumDiv = styled(StyledDiv)`
    height: 240px;
    cursor: pointer;
    background-color: ${getValueFromTheme('primaryBgColorDiv')};
    &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
    @media (min-width: 1000px) {
        width: 320px;
    }
`;

export const PhotoAlbumNameDiv = styled.div`
    width: 100%;
    height: 70px;
    background-color: ${getValueFromTheme('primaryBgColor')};
`;
