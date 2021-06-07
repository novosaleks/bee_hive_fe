import { gql } from '@apollo/client';

export const CREATE_PHOTO_ALBUM = gql`
    mutation CreatePhotoAlbum($title: String!, $description: String!) {
        createPhotoAlbum(title: $title, description: $description) {
            success
            message
        }
    }
`;

export const UPDATE_PHOTO_ALBUM = gql`
    mutation UpdatePhotoAlbum(
        $photoAlbumId: ID!
        $title: String
        $description: String
    ) {
        updatePhotoAlbum(
            photoAlbumId: $photoAlbumId
            title: $title
            description: $description
        )
    }
`;

export const REMOVE_PHOTO_ALBUM = gql`
    mutation RemovePhotoAlbum($photoAlbumId: ID!) {
        removePhotoAlbum(photoAlbumId: $photoAlbumId) {
            success
            message
        }
    }
`;

export const GET_PHOTO_ALBUMS_BY_USER_ID = gql`
    query GetPhotoAlbumsByUserId($userId: ID!) {
        getPhotoAlbumsByUserId(userId: $userId) {
            id
            title
            description
        }
    }
`;
