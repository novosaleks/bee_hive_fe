import { gql } from '@apollo/client';

export const GET_PHOTO_BY_USER_ID = gql`
    query GetPhotoByUserId($userId: ID!) {
        location
        isAvatar
    }
`;

export const UPLOAD_PHOTO = gql`
    mutation UploadPhoto($file: Upload!, $avatar: Boolean) {
        uploadPhoto(file: $file, avatar: $avatar) {
            success
            message
        }
    }
`;
