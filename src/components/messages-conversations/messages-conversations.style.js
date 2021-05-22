import styled, { css } from 'styled-components';
import { StyledDiv } from '../../common/style';
import { getValueFromTheme } from '../../common/utils';
export const ConversationStyledDiv = styled(StyledDiv)`
    padding: 3%;
    cursor: pointer;
    &:hover {
        background-color: ${getValueFromTheme('hoverColor')};
    }
    &.active {
        background-color: ${getValueFromTheme('hoverColor')};
    }
`;
