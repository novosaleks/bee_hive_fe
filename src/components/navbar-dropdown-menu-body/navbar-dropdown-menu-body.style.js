import styled, { css } from 'styled-components';
import { StyledDiv, DropDown, media } from '../../common/style/index';

export const NavbarDropdownMenuBodyDiv = styled(DropDown)`
    ${media.laptop} {
        left: 72%;
    }
    ${media.miniMobile} {
        left: 10%;
        top: ${props => props.bottom + 55}px;
    }
    @media (max-width: 639px) and (min-width: 380px) {
        left: 20%;
    }
`;
export const NavbarDropdownItem = styled(StyledDiv)`
    flex-direction: row;
    margin-bottom: 3%;
    align-items: center;
    justify-content: space-around;
    img {
        width: 35px;
        height: 35px;
        margin-right: 5%;
    }
    a {
        font-size: 0.9em;
    }
`;
