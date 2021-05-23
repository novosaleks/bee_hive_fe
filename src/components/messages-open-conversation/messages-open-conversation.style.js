import styled from 'styled-components';
import { StyledDiv, Button } from '../../common/style';

export const OpenConversationGroup = styled(StyledDiv)`
    grid-area: 1 / 2 / 2 / 5;
    flex-grow: 2;
    margin-left: 3%;
    overflow: auto;
`;
export const OpenConversationDiv = styled(StyledDiv)`
    background-color: #72898f;
    overflow: auto;
    flex-grow: 1;
    justify-content: flex-start;
`;
export const MessageDiv = styled(StyledDiv)`
    align-items: start;
    justify-self: end;
    padding: 5px;
`;
export const SendButton = styled(Button)`
    width: 15vw;
    font-size: 1rem;
    margin-right: 3%;
`;
