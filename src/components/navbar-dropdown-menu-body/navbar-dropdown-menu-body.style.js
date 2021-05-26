import styled, { css } from 'styled-components';
import { StyledDiv, media } from '../../common/style/index';
import { getValueFromTheme } from '../../common/utils';

export const NavbarDropdownMenuBodyDiv = styled(StyledDiv)`
    background-color: ${getValueFromTheme('primaryBgColorDiv')};
    width: 240px;
    height: 150px;
    padding: 1%;
    position: absolute;
    justify-content: center;
    align-items: flex-start;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    left: ${props => props.left}px;
    top: ${props => props.bottom + 35}px;
    visibility: hidden;
    z-index: 0;
    transition: 1.2s;
    opacity: 0;
    ${props =>
        props.isOpen &&
        css`
            opacity: 1;
            z-index: 3;
            visibility: visible;
        `}
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
