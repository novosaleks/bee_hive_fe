import { gql } from '@apollo/client';

export const GET_ALL_NOTIFICATIONS = gql`
    query {
        getAllNotifications {
            photo
            firstName
            lastName
            userRatingColor
            userRateScore
            rating
            ratingTextColor
            postText
        }
    }
`;
