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
        }
    }
`;
