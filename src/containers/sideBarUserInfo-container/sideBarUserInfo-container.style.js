import styled from 'styled-components';
import { StyledDiv } from '../../common/style/index';

const media = {
   mobile: '@media(max-width: 1155px)'
}

export const StyledSidebarDiv = styled(StyledDiv)`
   width:20%;
   ${media.mobile}{
      width:100%;
   }
`;