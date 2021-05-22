import styled, { css } from 'styled-components';
import { StyledDiv, Button, media } from '../../common/style/index';

export const MessagesSidebarStyled = styled(StyledDiv)`
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    align-self: center;
    margin-top: 5%;
    margin-bottom: 5%;
    ${(props) =>
        props.conversationOpen &&
        css`
            margin-right: 5%;
            grid-area: 1 / 1 / 2 / 2;
        `}
`;

export const NewConversationButton = styled(Button)`
    font-size: 1.3rem;
    width: 100%;
    margin-bottom: 5%;
    ${media.mobile} {
        font-size: 0.9rem;
    }
`;
