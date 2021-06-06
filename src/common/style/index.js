import styled, { css } from 'styled-components';
import { space, layout, typography, color, flexbox } from 'styled-system';

import { getValueFromTheme } from '../utils';
import { Link } from 'react-router-dom';

import arrow from '../../assets/arrow.png';

export const media = {
    miniMobile: '@media(max-width: 639px)',
    mobile: '@media(max-width: 988px)',
    laptop: '@media(min-width: 989px) and (max-width: 1300px)',
};

export const PrimaryBackground = styled.div`
    background-color: ${getValueFromTheme('primaryBgColor')};
    min-height: 100vh;
`;
export const PrimaryBackgroundPage = styled.div`
    background-color: ${getValueFromTheme('primaryBgColorPage')};
`;

export const StyledPageWrapper = styled(PrimaryBackgroundPage)`
    display: flex;
    min-height: 100vh;
    padding: 5%;
    ${flexbox};
`;

export const Input = styled.input`
    position: relative;
    border: none;
    border-bottom: 2px solid ${getValueFromTheme('inputColor')};
    background: none;
    width: 100%;
    min-height: 35px;
    outline: none;
    transition: all 0.1s;
    color: ${getValueFromTheme('inputColor')};
    ${space};

    &:focus {
        border: 2px solid ${getValueFromTheme('focusColor')};
    }

    &::placeholder {
        color: ${getValueFromTheme('inputColor')};
    }

    &.required {
        border: 2px solid #002e6b;
    }

    &.v-invalid {
        border: 2px solid red;
    }
`;

export const Button = styled.button`
    background-color: ${props =>
        props.backgroundColor || getValueFromTheme('buttonBgColor')};
    border: 2px solid
        ${props => props.borderColor || getValueFromTheme('primaryColor')};
    font-size: ${props => props.backgroundColor || '36px'};
    ${space};
    ${layout};
    ${color};
    ${typography};
    outline: 2px solid transparent;
    transition: all 0.2s;

    ${space};
    ${layout};

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        background-color: ${getValueFromTheme('primaryColor')};
        color: #fff;
    }

    &:focus-within {
        outline-color: ${getValueFromTheme('focusColor')};
    }
`;

export const StyledText = styled.p`
    color: ${props => props.color || getValueFromTheme('textColor')};
    font-weight: 200;
    ${space};
    ${typography};
    ${color};
    text-align: ${props => props.align || 'center'};
`;

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || 'column'};
    width: ${props => props.width || '100%'};
    align-items: ${props => props.align || 'center'};
    justify-content: ${props => props.content || 'center'};
    ${layout};
    ${space};
    ${flexbox};
`;

export const StyledLabel = styled.div`
    border: 2px solid ${getValueFromTheme('primaryColor')};
    text-align: center;
    width: 80%;
    margin: 0 auto;
    ${space};
`;

export const centerAlignedColumn = css`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const NavLink = styled(Link)`
    ${space};
    ${layout};
    color: ${getValueFromTheme('textColor')};

    &:hover {
        text-decoration: none;
        color: ${getValueFromTheme('primaryColor')};
    }
`;

export const DivLine = styled.div`
    height: 2px;
    width: 100%;
    background-color: ${props =>
        props.backgroundColor || getValueFromTheme('primaryColor')};
    ${space};
`;
export const StyledDivPage = styled(StyledDiv)`
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    ${flexbox};
    ${layout};
    ${media.mobile} {
        flex-direction: column;
        justify-content: flex-start;
    }
`;
export const StyledPageContent = styled(StyledDiv)`
    width: 60%;

    ${media.laptop} {
        width: 70%;
    }
    ${media.mobile} {
        width: 100%;
    } ;
`;

export const CommonForm = styled.form`
    width: 100%;
    padding: 0 5px;
`;

export const Logo = styled.img`
    max-width: 550px;
    width: 100%;
    height: auto;
`;

export const SearchContactsDiv = styled(StyledDiv)`
    background-color: ${getValueFromTheme('searchContactsBgColor')};
    box-sizing: border-box;
`;
export const SearchContactsTitle = styled.h2`
    font-size: 1.2rem;
    color: ${getValueFromTheme('searchContactsTextColor')};
    padding: 3px;
    text-align: center;
`;

export const NotificationDiv = styled(SearchContactsDiv)`
    height: 30vh;
    margin-bottom: 40vh;
    ${flexbox};
`;

export const DropDown = styled(StyledDiv)`
    background-color: ${getValueFromTheme('primaryBgColorDiv')};
    width: 240px;
    height: 150px;
    padding: 1%;
    position: absolute;
    justify-content: center;
    align-items: flex-start;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    left: ${props => props.left}px;
    right: ${props => props.right}px;
    top: ${props => (props.bottom && props.bottom + 'px') || '28%'};
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
`;

export const SubmitButton = styled.button`
    align-self: flex-end;
    background: ${getValueFromTheme('primaryBgColor')};
    transform: rotateX(0.003deg);
    color: ${getValueFromTheme('primaryColor')};
    text-decoration: none;
    font-size: 1.2em;
    display: inline-block;
    font-family: Montserrat;
    text-transform: uppercase;
    text-align: center;
    border: 2px solid ${getValueFromTheme('primaryColor')};
    transition: 0.02s 0.2s cubic-bezier(0.1, 0, 0.1, 1);
    padding: 0.2%;
    margin-right: 1%;
    width: 40vh;
    &::before {
        content: '';
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
        right: 100%;
        bottom: 0;
        background: ${getValueFromTheme('primaryColor')};
        transition: 0.5s 0.2s cubic-bezier(0.1, 0, 0.1, 1),
            left 0.3s cubic-bezier(0.1, 0, 0.1, 1);
        z-index: -1;
    }
    &::after {
        content: '';
        display: inline-block;
        background-image: url(${arrow});
        position: absolute;
        top: 0;
        left: calc(100% - 3em);
        right: 3em;
        bottom: 0;
        background-size: 1.5em;
        background-repeat: no-repeat;
        background-position: center;
        transition: right 0.3s cubic-bezier(0.1, 0, 0.1, 1);
    }
    &:hover {
        &::before {
            left: calc(100% - 3em);
            right: 0;
            transition: 0.3s cubic-bezier(0.1, 0, 0.1, 1),
                left 0.3s 0.2s cubic-bezier(0.1, 0, 0.1, 1);
        }
        &::after {
            right: 0;
            transition: right 0.3s 0.2s cubic-bezier(0.1, 0, 0.1, 1);
        }
    }
    @media (max-width: 495px) {
        font-size: 1em;
        padding: 0;
        width: 23vh;
        &::after {
            background-size: 1.3em;
        }
    }
`;
