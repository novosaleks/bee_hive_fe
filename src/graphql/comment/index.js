import { gql } from '@apollo/client';

export const ADD_COMMENT = gql`
    mutation AddComment(
        $content: String!
        $authorId: ID!
        $postId: ID!
        $createdAt: String!
    ) {
        addComment(
            content: $content
            authorId: $authorId
            postId: $postId
            createdAt: $createdAt
        )
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
