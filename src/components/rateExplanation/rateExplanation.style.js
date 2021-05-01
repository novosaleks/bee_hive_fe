import styled from 'styled-components';
import { StyledDiv, StyledText } from '../../common/style/index';
import { getValueFromTheme } from '../../common/utils';

export const ExplanationStyledDiv = styled(StyledDiv)`
   background-color:   ${getValueFromTheme('primaryBgColor')};
   width: 125px;
   height: 115px;
   position: relative;
   left:-5%;
`;
export const ExplanationStyledText = styled(StyledText)`
  opacity:0.7;
  font-size: 1em;
`;