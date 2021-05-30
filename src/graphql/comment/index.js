import { gql } from '@apollo/client';

export const ADD_COMMENT = gql`
    mutation AddComment(
        $content: String!
        $reply: Boolean!
        $addresseeId: String!
        $replyContent: String!
    ) {
        addComment(
            content: $content
            reply: $reply
            addresseeId: $addresseeId
            replyContent: $replyContent
        )
    }
`;

export const GET_COMMENTS_BY_POST_ID = gql`
    query GetCommentsByPostId($postId: ID!) {
        getCommentsByPostId(postId: $postId) {
            authorId
            content
            createdAt
            reply
            addresseeId
            replyContent
        }
    }
`;
