import { gql } from '@apollo/client';

export const UPDATE_POST = gql`
    mutation updatePost($text: String!) {
        updatePost(text: $text)
    }
`;

export const REMOVE_POST = gql`
    mutation removePost($postId: String!) {
        removePost(postId: $postId)
    }
`;
