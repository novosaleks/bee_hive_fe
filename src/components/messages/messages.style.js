import styled, { css } from 'styled-components';
import { StyledDivPage, SearchContactsDiv } from '../../common/style';
import { getValueFromTheme } from '../../common/utils';

const CSS_Sidebar_Mobile = css`
    display: grid;
    grid-area: 1 / 1 / 2 / 5;
    width: 86vw;
    margin-left: 6%;
    .conversations {
        width: inherit;
    }
`;

export const MessagesDivBlock = styled(StyledDivPage)`
    margin-top: 1%;
    flex-direction: column;
    box-sizing: border-box;
    ${props =>
        props.conversationOpen &&
        css`
            justify-content: space-between;
            align-items: stretch;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: 1fr;
            grid-column-gap: 5px;
        `}
    @media(max-width: 700px) {
        width: 90%;
        margin-left: ${props => (props.conversationOpen ? '1%' : '10%')};
        .message-sidebar {
            display: ${props => props.conversationOpen && 'none'};
            ${props => props.stateSidebar && CSS_Sidebar_Mobile}
        }
        .open-conversation {
            display: ${props => props.stateSidebar && 'none'};
            grid-area: 1 / 1 / 2 / 5;
            width: 86vw;
            margin-left: 6%;
        }
    }
`;

export const NotificationTitle = styled.h2`
    font-size: 1.2rem;
    color: ${getValueFromTheme('searchContactsTextColor')};
    padding: 3px;
`;
