import styled from 'styled-components';
import { StyledDiv, Button } from '../../common/style';
import { getValueFromTheme } from '../../common/utils';
export const OpenConversationGroup = styled(StyledDiv)`
    grid-area: 1 / 2 / 2 / 5;
    flex-grow: 2;
    margin-left: 3%;
    overflow: auto;
    height: 98vh;
    margin-bottom: 1%;
`;
export const OpenConversationDiv = styled(StyledDiv)`
    background-color: ${getValueFromTheme('searchContactsBgColor')};
    overflow: auto;
    flex-grow: 1;
    justify-content: flex-start;
    &&::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
        background-color: #f9f9fd;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${getValueFromTheme('searchContactsBgColor')};
        background-image: -webkit-gradient(
            linear,
            0 0,
            0 100%,
            color-stop(0.5, rgba(255, 255, 255, 0.25)),
            color-stop(0.5, transparent),
            to(transparent)
        );
    }
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
