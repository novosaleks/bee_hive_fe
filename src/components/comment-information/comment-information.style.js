import styled from 'styled-components';

export const CommentInfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-left: 15px;
    width: 80%;
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
