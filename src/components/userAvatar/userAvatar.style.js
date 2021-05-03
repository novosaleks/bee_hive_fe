import styled, { css } from 'styled-components';
import { getValueFromTheme } from '../../common/utils';
import { layout } from 'styled-system';
const media = {
    mobile: '@media(max-width: 700px)'
}

export const DivImgForUserAvatar = styled.div`
    display:flex;
    justify-content: flex-end;
    ${layout}
    border-radius: 50%;
    border: 10px solid ${props => props.rating || getValueFromTheme('primaryBgColorDiv')};
    background-color: ${getValueFromTheme('primaryBgColorDiv')};
    ${props => props.photo && css`
        background-image: url(${props => props.photo}) ;
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
    ${media.mobile} {
        display: none;
    }
`;
