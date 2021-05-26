import { gql } from '@apollo/client';

export const CREATE_POST = gql`
    mutation CreatePost($text: String!) {
        createPost(text: $text)
    }
`;

export const UPDATE_POST = gql`
    mutation UpdatePost($text: String!, $postId: ID!) {
        updatePost(text: $text, postId: $postId)
    }
`;

export const REMOVE_POST = gql`
    mutation RemovePost($postId: ID!) {
        removePost(postId: $postId)
    }
`;

export const GET_POSTS_BY_AUTHOR_ID = gql`
    query GetPostsByAuthorId($authorId: ID!) {
        getPostsByAuthorId(authorId: $authorId) {
            id
            text
            createdAt
            updatedAt
        }
    }
`;
