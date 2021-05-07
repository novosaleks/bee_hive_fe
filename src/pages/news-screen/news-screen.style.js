import styled from 'styled-components';
import { StyledDiv, media } from '../../common/style/index';


export const SidebarDivStyled = styled(StyledDiv)`
   width:20%;
   position: sticky;
   top:10%;
   margin-right: 5%;
      ${media.mobile} {
         display: none;
      };
`;
