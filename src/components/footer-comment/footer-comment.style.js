import styled from 'styled-components';
import { StyledDiv } from '../../common/style';
import { getValueFromTheme } from '../../common/utils';
export const CommentBlock = styled(StyledDiv)`
    flex-direction: row;
    justify-content: start;
    .user-avatar {
        align-self: start;
    }
    @media (max-width: 375px) {
        width: 90vw;
        position: relative;
        right: 0;
        margin-right: 35%;
    }
`;

export const CommentInfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-left: 15px;
    width: 90%;
    margin-bottom: 5%;
    cursor: pointer;
    p {
        margin: 0;
    }
    .content {
        text-align: left;
        font-style: italic;
        font-size: 1.2rem;
    }
    .reply {
        position: relative;
        text-align: right;
        padding-right: 5%;
        text-decoration: underline;
        font-size: 0.8rem;
        padding-bottom: 2%;
    }
    .comment-form {
        padding: 3%;
    }
    &:hover {
        background-color: #768996;
        opacity: 0.8;
        border-radius: 5px;
    }
`;
