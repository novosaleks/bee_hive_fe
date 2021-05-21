import styled, { css } from 'styled-components';
import { media } from '../../common/style/index';
import { getValueFromTheme } from '../../common/utils';
import { layout } from 'styled-system';

export const DivImgForUserAvatar = styled.div`
    display: flex;
    justify-content: flex-end;
    ${layout};
    border-radius: 50%;
    border: 10px solid
        ${props => props.rating || getValueFromTheme('primaryBgColorDiv')};
    background-color: ${getValueFromTheme('primaryBgColorDiv')};
    ${props =>
        props.photo &&
        css`
            background-image: url(${props => props.photo});
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
        `}
`;

export const RateScore = styled.div`
    width: 50px;
    height: 25px;
    text-align: center;
    background-color: ${getValueFromTheme('primaryBgColorDiv')};
    align-self: flex-end;
    border: 1px solid ${getValueFromTheme('primaryBgColorPage')};

    ${props =>
        props.onlineBlock &&
        css`
            width: 25px;
            height: 20px;
            font-size: 0.7em;
            position: relative;
            left: 25%;
        `};

    ${media.miniMobile} {
        width: 25px;
        height: 20px;
        font-size: 0.7em;
        position: relative;
        left: 25%;
    } ;
`;
