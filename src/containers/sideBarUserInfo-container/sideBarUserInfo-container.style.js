import styled from 'styled-components';
import { StyledDiv, media } from '../../common/style/index';


export const StyledSidebarDiv = styled(StyledDiv)`
   width:20%;

   ${media.mobile}{
      width:100%;
   }
   ${media.laptop}{
      width:30%;
   }
`;