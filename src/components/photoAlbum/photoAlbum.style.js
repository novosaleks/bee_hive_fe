import styled from 'styled-components';

import { getValueFromTheme } from '../../common/utils';
import { StyledDiv, media } from '../../common/style/index';

export const PhotoAlbumDiv = styled(StyledDiv)`
  width: 320px;
  height:240px;
  background-color: ${getValueFromTheme('primaryBgColorDiv')};
  ${media.laptop}{
    margin-right:5px;
    width: 240px;
  };
  ${media.mobile}{
    width: 220px;
  };
  ${media.miniMobile}{
    margin-right:5px;
  };
`;

export const PhotoAlbumNameDiv = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${getValueFromTheme('primaryBgColor')};
  
`;
