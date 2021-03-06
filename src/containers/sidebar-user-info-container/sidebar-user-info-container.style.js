import styled from 'styled-components';
import { StyledDiv, media } from '../../common/style/index';

export const StyledSidebarDiv = styled(StyledDiv)`
    width: 20%;
    a {
        width: 100%;
    }
    ${media.mobile} {
        width: 100%;
    }
    ${media.laptop} {
        width: 30%;
        margin-right: 10px;
    }
`;
