import { gql } from '@apollo/client';

export const GET_ALL_CONVERSATIONS = gql`
    query {
        getAllConversations {
            #Array of objects that includes fields: sender(id of the sender) and text (string)
            messages {
                sender
                text
            }
            #Array of recipients' ids
            recipients {
                id
            }
        }
    }
`;
export const ADD_NEW_CONVERSATION = gql`
    mutation AddNewConversation(
        $recipients: [ID]!
        $sender: ID!
        $text: String!
    ) {
        addNewConversation(
            recipients: $recipients
            sender: $sender
            text: $text
        ) {
            messages {
                sender
                text
            }
            recipients
        }
    }
`;
