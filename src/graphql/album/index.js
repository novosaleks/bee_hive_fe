import { gql } from '@apollo/client';

export const ADD_PHOTO = gql`
    mutation AddPhoto($albumId: ID!, $file: String!) {
        addPhoto(albumId: $albumId, file: $file) {
            progress
            url
        }
    }
`;

export const ADD_ALBUM = gql`
    mutation AddAlbum($title: String!, $description: String!) {
        addAlbum(title: $title, description: $description)
    }
`;

export const UPDATE_ALBUM = gql`
    mutation UpdateAlbum(
        $albumId: ID!
        $title: String!
        $description: String!
    ) {
        updateAlbum(albumId: $albumId, title: $title, description: $description)
    }
`;

export const GET_ALL_ALBUMS_BY_USER_ID = gql`
    query GetAllAlbumsByUserId($userId: ID!) {
        getAllAlbumsByUserId {
            id
            title
            description
            images
        }
    }
`;
