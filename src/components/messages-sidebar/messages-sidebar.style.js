import styled, { css } from 'styled-components';
import { StyledDiv, Button, media } from '../../common/style/index';

export const MessagesSidebarStyled = styled(StyledDiv)`
    width: 100%;
    min-height: 50vh;
    justify-content: space-around;
    align-self: center;
    margin-top: 5%;
    margin-right: 5%;
    ${(props) =>
        props.conversationOpen &&
        css`
            grid-area: 1 / 1 / 2 / 2;
        `}
`;

export const NewConversationButton = styled(Button)`
    font-size: 1.3rem;
    width: 100%;
`;
