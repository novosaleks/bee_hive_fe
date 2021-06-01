import styled from 'styled-components';
import { StyledDiv } from '../../common/style';
import { getValueFromTheme } from '../../common/utils';

export const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  min-height: 100vh;
  width: 4vw;
  background-color: ${getValueFromTheme('messagesScreenSidebarColor')};

  .toggler {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    min-height: 100vh;
    width: 4vw;
    background-color: ${getValueFromTheme('messagesScreenSidebarColor')};
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
    //Show menu
    .toggler:checked ~ .menu {
        visibility: visible;
    }
    .toggler:checked ~ .menu > div {
        transform: scale(1);
        transition-duration: 0.75s;
    }
    .toggler:checked ~ .menu > div > div {
        opacity: 1;
        transition: opacity 0.4s ease;
    }
    @media (max-width: 700px) {
        width: 10vw;
    }
    input[type='checkbox'] {
        width: inherit;
    }
`;

export const Hamburger = styled.section`
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
`;
export const Menu = styled(StyledDiv)`
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`;
