import styled from 'styled-components';
import { StyledDiv, media } from '../../common/style/index';

export const RightBarDiv = styled(StyledDiv)`
 width:80%;
 ${media.laptop}{
    width:70%;
 }
`