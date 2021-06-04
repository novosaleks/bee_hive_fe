import styled from 'styled-components';
import { StyledDiv } from '../../common/style';

export const OpenConversationGroup = styled(StyledDiv)`
    grid-area: 1 / 2 / 2 / 5;
    flex-grow: 2;
    margin-left: 3%;
    overflow: auto;
    height: 98vh;
    margin-bottom: 1%;

    @media (max-width: 400px) {
        .post-author {
            font-size: 1em;
        }
        .send-button {
            width: 100%;
        }
    }
`;
