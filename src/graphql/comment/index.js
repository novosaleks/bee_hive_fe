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

export const GET_COMMENTS_BY_POST_ID = gql`
    query GetCommentsByPostId($postId: ID!) {
        getCommentsByPostId(postId: $postId) {
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
export const GET_COMMENTS_BY_PHOTO_ID = gql`
    query GetCommentsByPostId($photoId: ID!) {
        getCommentsByPostId(photoId: $photoId) {
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
