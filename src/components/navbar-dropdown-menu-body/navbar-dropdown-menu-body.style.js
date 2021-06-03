import styled, { css } from 'styled-components';
import { StyledDiv, DropDown, media } from '../../common/style/index';

export const NavbarDropdownMenuBodyDiv = styled(DropDown)`
    @media (max-width: 398px) {
        left: 10%;
    }
    @media (max-width: 610px) {
        left: ${props => props.left - 150}px;
    }
    @media (min-width: 910px) {
        top: 20%;
    }
    @media (min-width: 989px) and (max-width: 1060px) {
        left: 75%;
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
