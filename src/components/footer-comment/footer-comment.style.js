import styled, { css } from 'styled-components';
import { StyledDiv } from '../../common/style';

const CSS__REPLY_BLOCK = css`
    width: inherit;
    margin-right: 0;
    @media (max-width: 575px) {
        width: inherit;
        margin-right: 0;
    }
`;

export const CommentBlock = styled(StyledDiv)`
    flex-direction: row;
    justify-content: start;
    .user-avatar {
        align-self: start;

        div {
            align-self: flex-end;
        }
    }
    @media (max-width: 575px) {
        width: 90vw;
        position: relative;
        right: 0;
        margin-right: 35%;
        .user-avatar {
            /* div {
                width: 25px !important;
            } */
        }
    }
    ${props => props.replyBlock && CSS__REPLY_BLOCK}
`;
