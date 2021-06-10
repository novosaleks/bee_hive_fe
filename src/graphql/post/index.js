import { gql } from '@apollo/client';

export const CREATE_POST = gql`
    mutation CreatePost($recipientId: ID!, $text: String!) {
        createPost(recipientId: $recipientId, text: $text) {
            success
            message
        }
    }
`;

export const UPDATE_POST = gql`
    mutation UpdatePost($postId: ID!, $text: String!) {
        updatePost(postId: $postId, text: $text) {
            success
            message
        }
    }
`;

export const REMOVE_POST = gql`
    mutation RemovePost($postId: ID!) {
        removePost(postId: $postId) {
            success
            message
        }
    }
`;

export const GET_POSTS_BY_AUTHOR_ID = gql`
    query GetPostsByAuthorId($authorId: ID!) {
        getPostsByAuthorId(authorId: $authorId) {
            id
            text
            createdAt
            updatedAt
            veryGood
            good
            neutral
            bad
            veryBad
            author {
                id
                firstName
                lastName
                karma
                lastVisit
                avatar {
                    url
                }
            }
        }
    }
`;

export const GET_WALL_POSTS_BY_USER_ID = gql`
    query GetWallPostsByUserId($userId: ID!) {
        getWallPostsByUserId(userId: $userId) {
            id
            text
            createdAt
            updatedAt
            veryGood
            good
            neutral
            bad
            veryBad
            author {
                id
                firstName
                lastName
                karma
                lastVisit
                avatar {
                    url
                }
            }
        }
    }
`;
