import { StyledDiv, StyledText } from '../../common/style/index';
import { PhotoAlbumDiv, PhotoAlbumNameDiv } from './photo-album.style';

const PhotoAlbum = ({ albumName }) => {
    return (
        <StyledDiv direction='row' content='space-between'>
            <PhotoAlbumDiv content='flex-end'>
                <StyledText>Photo</StyledText>
                <PhotoAlbumNameDiv>
                    <StyledText>{albumName || 'Album Name'}</StyledText>
                </PhotoAlbumNameDiv>
            </PhotoAlbumDiv>
            <PhotoAlbumDiv content='flex-end'>
                <StyledText>Photo</StyledText>
                <PhotoAlbumNameDiv>
                    <StyledText>{albumName || 'Album Name'}</StyledText>
                </PhotoAlbumNameDiv>
            </PhotoAlbumDiv>
        </StyledDiv>
    );
};

export default PhotoAlbum;
