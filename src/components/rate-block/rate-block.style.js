import styled from 'styled-components';
import { StyledDiv } from '../../common/style/index';
import { getValueFromTheme } from '../../common/utils';

const media = {
    mobile: '@media(max-width: 350px)',
};

export const RateDiv = styled(StyledDiv)`
    margin-top: 3%;
    width: 170px;
    height: 50px;
    align-self: flex-start;
    background-color: ${getValueFromTheme('primaryBgColor')};

    ${media.mobile} {
        width: 150px;
    }
`;

export const RatingHintImg = styled.img`
    align-self: flex-start;
    cursor: pointer;
    margin-left: 10px;
`;
