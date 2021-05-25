import styled, { css } from 'styled-components';
import { StyledDivPage, SearchContactsDiv } from '../../common/style';
import { getValueFromTheme } from '../../common/utils';
export const MessagesDivBlock = styled(StyledDivPage)`
    margin-top: 1%;
    flex-direction: column;
    box-sizing: border-box;
    ${(props) =>
        props.conversationOpen &&
        css`
            justify-content: space-between;
            align-items: stretch;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: 1fr;
            grid-column-gap: 5px;
        `}
`;

export const NotificationDiv = styled(SearchContactsDiv)`
    height: 30vh;
    margin-bottom: 40vh;
`;
export const NotificationTitle = styled.h2`
    font-size: 1.2rem;
    color: ${getValueFromTheme('searchContactsTextColor')};
    padding: 3px;
`;
