import React from 'react';
import { StyledDiv, StyledText } from '../../common/style/index';
import { PhotoAlbumDiv, PhotoAlbumNameDiv } from './photoAlbum.style'

const PhotoAlbum = ({ albumName }) => {
   return (
      <StyledDiv direction="row" content="space-between" >
         <PhotoAlbumDiv content="flex-end" width={[160, 240, 320]} height={[240]}>
            <StyledText>Photo</StyledText>
            <PhotoAlbumNameDiv>
               <StyledText>{albumName || "Album Name"}</StyledText>
            </PhotoAlbumNameDiv>
         </PhotoAlbumDiv>
         <PhotoAlbumDiv content="flex-end" width={[160, 240, 320]} height={[240]}>
            <StyledText>Photo</StyledText>
            <PhotoAlbumNameDiv>
               <StyledText>{albumName || "Album Name"}</StyledText>
            </PhotoAlbumNameDiv>
         </PhotoAlbumDiv>
      </StyledDiv>
   );
}

export default PhotoAlbum;