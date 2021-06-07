import { gql } from '@apollo/client';

export const GET_ALL_USERS = gql`
    query GetAllUsers {
        getAllUsers {
            id
            firstName
            lastName
            email
            password
        }
    }
`;

export const CREATE_USER = gql`
    mutation CreateUser(
        $firstName: String!
        $lastName: String!
        $email: String!
        $password: String!
        $occupation: String!
        $location: String!
        $birthDate: String!
        $userInfo: String!
    ) {
        createUser(
            firstName: $firstName
            lastName: $lastName
            email: $email
            password: $password
            occupation: $occupation
            location: $location
            birthDate: $birthDate
            userInfo: $userInfo
        ) {
            success
            message
        }
    }
`;

export const UPDATE_USER = gql`
    mutation UpdateUser(
        $firstName: String
        $lastName: String
        $email: String
        $password: String
        $occupation: String
        $location: String
        $birthDate: String
        $userInfo: String
    ) {
        updateUser(
            firstName: $firstName
            lastName: $lastName
            email: $email
            password: $password
            occupation: $occupation
            location: $location
            birthDate: $birthDate
            userInfo: $userInfo
        ) {
            success
            message
        }
    }
`;

export const REMOVE_USER = gql`
    mutation RemoveUser($userId: ID!) {
        removeUser(userId: $userId) {
            success
            message
        }
    }
`;

export const GET_CURRENT_USER = gql`
    query CurrentUser {
        currentUser {
            id
            firstName
            lastName
            email
            password
            occupation
            location
            birthDate
            userInfo
            createdAt
            updatedAt
            avatar {
                url
            }
        }
    }
`;

export const GET_USER_BY_ID = gql`
    query GetUserById($userId: ID!) {
        getUserById(userId: $userId) {
            id
            firstName
            lastName
            occupation
            location
            birthDate
            userInfo
            avatar {
                url
            }
        }
    }
`;

export const SUBSCRIBE_TO_USER = gql`
    mutation SubscribeToUser($userIdToSubscribe: ID!) {
        subscribeToUser(userIdToSubscribe: $userIdToSubscribe) {
            success
            message
        }
    }
`;

export const GET_SUBSCRIBERS_BY_USER_ID = gql`
    query GetSubscribersByUserId($userId: ID!) {
        getSubscribersByUserId(userId: $userId) {
            id
            firstName
            lastName
            occupation
            location
            birthDate
            userInfo
        }
    }
`;

export const GET_SUBSCRIPTIONS_BY_USER_ID = gql`
    query GetSubscriptionsByUserId($userId: ID!) {
        getSubscriptionsByUserId(userId: $userId) {
            id
            firstName
            lastName
            occupation
            location
            birthDate
            userInfo
        }
    }
`;

export const GET_NEWS_BY_USER_ID = gql`
    query GetNewsByUserId($userId: ID!) {
        getNewsByUserId(userId: $userId) {
            id
            text
            createdAt
            updatedAt
            author {
                id
                firstName
                lastName
                avatar {
                    url
                }
            }
        }
    }
`;
