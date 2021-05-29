import { gql } from '@apollo/client';

export const ADD_COMMENT = gql`
    mutation AddComment($content: String!) {
        addComment(content: $content)
    }
`;

export const GET_COMMENTS_BY_POST_ID = gql`
    query GetCommentsByPostId($postId: ID!) {
        getCommentsByPostId(postId: $postId) {
            authorId
            content
            createdAt
        }
    }
`;
