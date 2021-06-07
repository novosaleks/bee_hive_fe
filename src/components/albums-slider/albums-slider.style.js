import styled, { css } from 'styled-components';

import { getValueFromTheme } from '../../common/utils';
import { StyledDiv } from '../../common/style/index';
import albumBGImg from '../../assets/albumBGImg.jpg';

export const AlbomsBlock = styled(StyledDiv)`
    flex-direction: row;
    justify-content: space-between;

    ${props =>
        props.smallAlbum &&
        css`
            .swiper-slide {
                width: 140px !important;
                @media (min-width: 1000px) {
                    width: 320px !important;
                }
            }
        `}
`;

export const PhotoAlbumDiv = styled(StyledDiv)`
    height: 240px;
    cursor: pointer;
    background-color: ${getValueFromTheme('primaryBgColorDiv')};

    background-image: url(${albumBGImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    .description {
        color: #fff;
        font-weight: 400;
    }

    &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
    @media (min-width: 1000px) {
        width: 320px !important;
    }
`;

export const PhotoAlbumNameDiv = styled.div`
    width: 100%;
    height: 70px;
    background-color: ${getValueFromTheme('primaryBgColor')};
`;
