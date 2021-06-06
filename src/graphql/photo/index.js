import { gql } from '@apollo/client';

export const GET_PHOTOS_BY_USER_ID = gql`
    query GetPhotoByUserId($userId: ID!) {
        url
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
