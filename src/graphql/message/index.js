import { gql } from '@apollo/client';

export const GET_MESSAGES_BY_USER_ID = gql`
    query GetMessagesByUserId($userId: ID!) {
        getMessagesByUserId(userId: $userId) {
            id
            text
            createdAt
            updatedAt
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
            recipient {
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

export const SEND_MESSAGE = gql`
    mutation SendMessage($recipientId: ID!, $text: String!) {
        sendMessage(recipientId: $recipientId, text: $text) {
            success
            message
        }
    }
`;
