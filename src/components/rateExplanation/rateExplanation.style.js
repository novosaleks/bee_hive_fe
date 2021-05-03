import styled from 'styled-components';
import { StyledDiv, StyledText } from '../../common/style/index';
import { getValueFromTheme } from '../../common/utils';

export const ExplanationStyledDiv = styled(StyledDiv)`
   background-color: ${getValueFromTheme('primaryBgColor')};
   width: 155px;
   height: 155px;
   padding:1%;
   position: absolute;
   left: 56%;
   top:${props => (props.hintBottom)}px;
   border: 1px solid ${getValueFromTheme('inputColor')};

`;
export const ExplanationStyledText = styled(StyledText)`
  opacity:0.7;
  font-size: 1em;
`;