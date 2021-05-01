import styled from 'styled-components';
import { StyledDiv } from '../../common/style/index';
import { getValueFromTheme } from '../../common/utils';

export const UserExtraInfoDiv = styled(StyledDiv)`
   background-color: ${getValueFromTheme('primaryBgColor')};
   margin-top:3%;
   margin-bottom:3%;
   padding:1%;
`;
export const UserExtraInfoBlock = styled(StyledDiv)`
   background-color: #F15A29;
`;

export const MoreInfoImg = styled.img`
   cursor: pointer;
   align-self:flex-start;
`;