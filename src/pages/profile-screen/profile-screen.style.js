import styled from 'styled-components';
import { StyledDiv, media } from '../../common/style/index';



export const StyledPageContent = styled(StyledDiv)`
   width:60%;
   ${media.laptop}{
      width:70%;
   };
   ${media.mobile}{
      width:100%;
   };
`;
