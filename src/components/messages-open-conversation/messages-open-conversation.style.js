import styled from 'styled-components';
import { StyledDiv, Button } from '../../common/style';
import { getValueFromTheme } from '../../common/utils';

export const OpenConversationGroup = styled(StyledDiv)`
    grid-area: 1 / 2 / 2 / 5;
    flex-grow: 2;
    margin-left: 3%;
    height: 400px;
`;
export const OpenConversationDiv = styled(StyledDiv)`
    background-color: #72898f;
    flex-grow: 1;
    overflow: auto;
    /* overflow-y: scroll; */
    height: 400px;
    justify-content: flex-end;
`;
export const MessageDiv = styled(StyledDiv)`
    align-items: start;
    justify-content: end;
    padding: 5px;
`;
export const SendButton = styled(Button)`
    width: 20vw;
    font-size: 1rem;
`;

export const MessageTextDiv = styled.div``;
