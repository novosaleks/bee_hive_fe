import React from 'react';
import Title from '../title';
import PhotoAlbum from '../photo-album';

import { StyledDiv } from '../../common/style/index';

const AlbumsBlock = () => {
   return (
      <StyledDiv >
         <Title>Photo albums</Title>
         <PhotoAlbum />
      </StyledDiv>
   );
}

export default AlbumsBlock;