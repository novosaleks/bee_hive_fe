import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            id
            firstName
            lastName
            email
            password
            occupation
            location
            birthDate
            createdAt
            updatedAt
        }
    }
`;

export const LOGOUT = gql`
    mutation {
        logout
    }
`;
