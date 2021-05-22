import styled, { css } from 'styled-components';
import { StyledDiv, media, DivLine } from '../../common/style/index';
import { getValueFromTheme } from '../../common/utils';

export const TabsDivStyled = styled(StyledDiv)`
    width: 20%;
    cursor: pointer;
    align-self: center;
    margin-right: 5%;
    position: sticky;
    top: 40%;
    ${(props) =>
        props.messageBlock &&
        css`
            width: 40%;
            flex-direction: row;
            align-self: center;
            justify-self: center;
            position: relative;
            top: 0;
        `}
    ${media.mobile} {
        flex-direction: row;
        width: 60%;
        top: 0;
    } ;
`;
export const TabDivStyled = styled(StyledDiv)`
    flex-direction: row;
    justify-content: flex-start;
    ${(props) =>
        props.messageBlock &&
        css`
            flex-direction: column;
            justify-content: center;
            align-items: center;
        `};
    ${media.mobile} {
        flex-direction: column;
        justify-content: center;
    } ;
`;
export const TabAndLineDiv = styled(StyledDiv)`
    ${(props) =>
        props.messageBlock &&
        css`
            flex-direction: row;
        `};
    ${media.laptop && media.mobile} {
        flex-direction: row;
    } ;
`;
export const TabLine = styled(DivLine)`
    ${(props) =>
        props.messageBlock &&
        css`
            height: 103px;
            width: 2px;
        `};
    ${media.laptop && media.mobile} {
        height: 103px;
        width: 2px;
    } ;
`;

export const TabWrapper = styled(StyledDiv)`
    &.active {
        background-color: ${getValueFromTheme('primaryBgColor')};
    }
`;
