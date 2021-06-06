import { gql } from '@apollo/client';

export const GET_PHOTOS_BY_USER_ID = gql`
    query GetPhotosByUserId($userId: ID!) {
        getPhotosByUserId(userId: $userId) {
            id
            url
            isAvatar
        }
    }
`;

export const GET_PHOTOS_BY_PHOTO_ALBUM_ID = gql`
    query GetPhotosByPhotoAlbumId($photoAlbumId: ID!) {
        getPhotosByPhotoAlbumId(photoAlbumId: $photoAlbumId) {
            id
            url
            isAvatar
        }
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
