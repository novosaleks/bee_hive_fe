import { gql } from '@apollo/client';

export const GET_PHOTO_BY_USER_ID = gql`
    query GetPhotoByUserId($userId: ID!) {
        location
        isAvatar
    }
`;

export const UPLOAD_PHOTO = gql`
    mutation UploadPhoto(
        $photoAlbumId: ID
        $file: Upload!
        $isAvatar: Boolean
    ) {
        uploadPhoto(
            photoAlbumId: $photoAlbumId
            file: $file
            isAvatar: $isAvatar
        ) {
            success
            message
        }
    }
`;
