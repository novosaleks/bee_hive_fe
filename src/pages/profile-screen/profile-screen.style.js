import styled from 'styled-components';
import { StyledDiv } from '../../common/style/index';

const media = {
   mobile: '@media(max-width: 1155px)'
};

export const StyledDivPage = styled(StyledDiv)`
   ${media.mobile}{
      flex-direction:column;
   }
`;
export const StyledPageContent = styled(StyledDiv)`
   width:60%;
   ${media.mobile}{
      width:100%;
   }
`;
