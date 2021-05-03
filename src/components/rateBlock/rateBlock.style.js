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

export const RatingHintImg = styled.img`
   align-self: flex-start;
   cursor: pointer;
`;