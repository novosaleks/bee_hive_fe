import styled, { css } from 'styled-components';
import { StyledDiv, Button, media } from '../../common/style/index';
import { getValueFromTheme } from '../../common/utils';

export const GlobalSearchDiv = styled(StyledDiv)`
    background-color: #72898f;
    box-sizing: border-box;
`;
export const GlobalSearchTitle = styled.h2`
    font-size: 1.2rem;
    color: #f0f0ef;
    padding: 3px;
`;
export const MessagesContactsWrapper = styled(StyledDiv)`
    background-color: ${getValueFromTheme('primaryBgColor')};
`;
