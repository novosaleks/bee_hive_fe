import styled, { css } from 'styled-components';
import { StyledDiv, media, DivLine } from '../../common/style/index';
import { getValueFromTheme } from '../../common/utils';

const CSS_FOR_MESSAGE_SCREEN__TabsDivStyled = css`
    background: rgba(24, 39, 51, 0.85);
    width: 200vw;
    height: 200vh;
    display: flex;
    flex-direction: column;
    flex: none;
    align-items: center;
    justify-content: center;
    transform: scale(0);
    transition: all 0.4s ease;
`;
const CSS_FOR_MESSAGE_SCREEN__TabDivStyled = css`
    width: 60vw;
    height: 10vh;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    P {
        color: ${getValueFromTheme('messagesScreenSidebarTextColor')};
    }
`;

const CSS_FOR_MESSAGE_SCREEN__TabAndLineDiv = css`
    flex-direction: column;
`;
const CSS_FOR_MESSAGE_SCREEN__TabLine = css`
    height: 2px;
    width: 70vw;
`;
const CSS_FOR_MESSAGE_SCREEN__TabWrapper = css`
    width: 70vw;
`;
export const TabsDivStyled = styled(StyledDiv)`
    width: 20%;
    cursor: pointer;
    align-self: center;
    margin-right: 5%;
    position: sticky;
    top: 40%;

    ${props => props.messageBlock && CSS_FOR_MESSAGE_SCREEN__TabsDivStyled}

    ${media.mobile} {
        flex-direction: row;
        width: 60%;
        top: 0;
        position: relative;

        ${props => props.messageBlock && CSS_FOR_MESSAGE_SCREEN__TabsDivStyled}
    } ;
`;
export const TabDivStyled = styled(StyledDiv)`
    flex-direction: row;
    justify-content: center;
    img {
        width: 45px;
        height: 50px;
    }
    ${props => props.messageBlock && CSS_FOR_MESSAGE_SCREEN__TabDivStyled};

    ${media.mobile} {
        flex-direction: column;
        justify-content: center;

        ${props => props.messageBlock && CSS_FOR_MESSAGE_SCREEN__TabDivStyled};
    } ;
`;
export const TabAndLineDiv = styled(StyledDiv)`
    ${media.laptop && media.mobile} {
        flex-direction: row;

        ${props => props.messageBlock && CSS_FOR_MESSAGE_SCREEN__TabAndLineDiv}
    } ;
`;
export const TabLine = styled(DivLine)`
    ${props => props.messageBlock && CSS_FOR_MESSAGE_SCREEN__TabLine};
    ${media.laptop && media.mobile} {
        height: 103px;
        width: 2px;
        ${props => props.messageBlock && CSS_FOR_MESSAGE_SCREEN__TabLine};
    } ;
`;

export const TabWrapper = styled(StyledDiv)`
    ${props => props.messageBlock && CSS_FOR_MESSAGE_SCREEN__TabWrapper};
    &.active {
        background-color: ${props =>
            props.messageBlock
                ? '#064E5A'
                : getValueFromTheme('primaryBgColor')};
    }
`;
