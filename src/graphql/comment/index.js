import { gql } from '@apollo/client';

export const ADD_COMMENT = gql`
    mutation AddComment(
        $componentId: ID!
        $content: String!
        $reply: Boolean!
        $addresCommentId: ID!
        $addresseeId: String!
    ) {
        addComment(
            componentId: $componentId
            content: $content
            reply: $reply
            addresCommentId: $addresCommentId
            addresseeId: $addresseeId
        )
    }
`;

export const UPDATE_COMMENT = gql`
    mutation UpdateComment($commentId: ID!, $text: String!) {
        updateComment(commentId: $commentId, text: $text)
    }
`;

export const REMOVE_COMMENT = gql`
    mutation RemoveComment($commentId: ID!) {
        removeComment(commentId: $commentId)
    }
`;

export const GET_COMMENTS_BY_COMPONENT_ID = gql`
    query GetCommentsByPostId($componentId: ID!) {
        getCommentsByPostId(componentId: $componentId) {
            commentId
            authorId
            content
            createdAt
            reply
            addresCommentId
            addresseeId
        }
    }
`;
