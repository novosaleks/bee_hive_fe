import styled, { css } from 'styled-components';
import { media } from '../../common/style';
import { getValueFromTheme } from '../../common/utils';

export const NavbarWrapper = styled.div`
    background-color: ${getValueFromTheme('primaryBgColor')};
    padding: 2px 0;
`;

export const InnerContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 85%;
    margin: 0 auto;
    @media (max-width: 700px) {
        img {
            margin-left: 5%;
        }
    }
    @media (max-width: 290px) {
        img {
            width: 90px;
        }
    }
`;

export const NavbarLinks = styled.div`
    display: flex;
    gap: 45px;
    font-size: 28px;

    ${media.mobile} {
        display: none;
    }
`;
export const MobileNavbarLinks = styled.div`
    background-color: ${getValueFromTheme('primaryBgColor')};
    display: none;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    font-size: 28px;
    padding-left: 10%;
    transition: 1.2s;
    width: 100%;
    opacity: 0;
    z-index: 0;

    ${props =>
        props.isOpen &&
        css`
            display: flex;
            opacity: 1;
            z-index: 1;
        `}
    & a {
        padding: 1%;
    }
`;

export const Hamburger = styled.section`
    ${media.mobile} {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 60px;
        padding: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: start;
        div {
            position: relative;
            flex: none;
            width: 100%;
            height: 2px;
            background-color: ${getValueFromTheme(
                'messagesScreenSidebarTextColor'
            )};
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.4s ease;
            &::before,
            &::after {
                content: '';
                position: absolute;
                top: -10px;
                z-index: 1;
                width: 100%;
                height: 2px;
                background: inherit;
            }
            &::after {
                top: 10px;
            }
        }
    }
`;
export const MenuWrapper = styled.div`
    display: none;
    ${media.mobile} {
        display: inline-block;
        position: relative;
        z-index: 1;
        height: 55px;
        width: 60px;
        background-color: ${getValueFromTheme('mobileNavigationColor')};
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        border-radius: 5px;
        .toggler {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
            cursor: pointer;
            width: 50px;
            height: 50px;
            opacity: 0;
        }
        //animation for menu
        .toggler:checked + section > div {
            transform: rotate(135deg);
        }
        .toggler:checked + section > div::before,
        .toggler:checked + section > div::after {
            top: 0;
            transform: rotate(90deg);
        }
        .toggler:checked:hover + section > div {
            transform: rotate(225deg);
        }

        input[type='checkbox'] {
            width: inherit;
        }
    }
`;
