import styled from 'styled-components';
import { StyledDiv, StyledText } from '../../common/style/index';
import { getValueFromTheme } from '../../common/utils';
const media = {
  mobile: '@media(max-width: 350px)',
  desctop: '@media(min-width: 1140px)'
};
export const ExplanationStyledDiv = styled(StyledDiv)`
   background-color: ${getValueFromTheme('primaryBgColor')};
   width: 155px;
   height: 155px;
   padding:1%;
   position: absolute;
   left: 48%;
   top:${props => (props.hintBottom)}px;
   border: 1px solid ${getValueFromTheme('inputColor')};
   ${media.mobile}{
   left:40%;
   }
   ${media.desctop}{
   left:60%;
   }

`;
export const ExplanationStyledText = styled(StyledText)`
  opacity:0.7;
  font-size: 1em;
`;