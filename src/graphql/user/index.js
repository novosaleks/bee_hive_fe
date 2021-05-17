import { gql } from '@apollo/client';

export const GET_ALL_USERS = gql`
    query {
        getAllUsers {
            id
            firstName
            lastName
            email
            password
        }
    }
`;

export const GET_CURRENT_USER = gql`
    query {
        me {
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
