import styled from 'styled-components';
import { StyledDiv } from '../../common/style';
import { getValueFromTheme } from '../../common/utils';

export const OpenConversationGroup = styled(StyledDiv)`
    grid-area: 1 / 2 / 2 / 5;
    flex-grow: 2;
    margin-left: 3%;
`;
export const OpenConversationDiv = styled(StyledDiv)`
    background-color: ${getValueFromTheme('primaryBgColorDiv')};
    flex-grow: 1;
    overflow: auto;
`;
export const MessageDiv = styled(StyledDiv)`
    align-items: start;
    justify-content: end;
    padding: 5px;
`;
