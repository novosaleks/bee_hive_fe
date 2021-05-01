import styled from 'styled-components';
import { StyledDiv } from '../../common/style/index';
import { getValueFromTheme } from '../../common/utils';
import { layout } from 'styled-system';
export const MessageDiv = styled(StyledDiv)`
   margin-top:5%;
   padding: 2%;
   ${layout}
   background-color: ${getValueFromTheme('primaryBgColorDiv')};
`;