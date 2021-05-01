import styled from 'styled-components';
import { StyledDiv } from '../../common/style/index';
import { getValueFromTheme } from '../../common/utils';

const media = {
   mobile: '@media(max-width: 340px)'
};

export const RateDiv = styled(StyledDiv)`
   margin-top:3%;
   width:260px;
   height: 30px;
   align-self:flex-start;
   background-color: ${getValueFromTheme('primaryBgColor')};
   ${media.mobile}{
   position: relative;
   left:-20%;
   width:220px;
   }
`;

export const RateTitleDiv = styled(StyledDiv)`
   background-color: transparent;
   border: 2px solid #F15A29;
   width:100px;
   height: 30px;
`;

export const RatingHintImg = styled.img`
   align-self: flex-start;
   cursor: pointer;
`;