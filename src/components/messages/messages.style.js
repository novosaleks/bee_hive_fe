import styled, { css } from 'styled-components';
import { StyledDivPage } from '../../common/style';

export const MessagesDivBlock = styled(StyledDivPage)`
    margin-top: 1%;
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
