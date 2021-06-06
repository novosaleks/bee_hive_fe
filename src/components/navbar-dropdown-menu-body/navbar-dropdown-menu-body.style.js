import styled from 'styled-components';
import { StyledDiv, DropDown, media } from '../../common/style/index';

export const NavbarDropdownMenuBodyDiv = styled(DropDown)`
    top: ${props => (props.bottom < 20 ? props.bottom + 35 : 120)}px;
    ${media.laptop} {
        left: 72%;
    }
    ${media.miniMobile} {
        left: 10%;
        top: ${props => (props.bottom < 10 ? props.bottom + 55 : 80)}px;
    }
    @media (max-width: 639px) and (min-width: 380px) {
        left: 20%;
    }
    @media (max-width: 290px) {
        width: 180px;
        top: ${props => props.bottom + 35}px;
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
