import styled, { css } from 'styled-components';
import { StyledDivPage, StyledDiv } from '../../common/style';

export const MessagesDivBlock = styled(StyledDivPage)`
    margin-top: 1%;
    flex-direction: column;
    ${(props) =>
        props.conversationOpen &&
        css`
            justify-content: space-between;
            align-items: stretch;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: 1fr;
            grid-column-gap: 5px;
            height: 60vh;
        `}
`;

export const NotificationDiv = styled(StyledDiv)`
    background-color: #72898f;
    height: 30vh;
    box-sizing: border-box;
    align-self: center;
`;
export const NotificationTitle = styled.h2`
    font-size: 1.2rem;
    color: #f0f0ef;
    padding: 3px;
`;
