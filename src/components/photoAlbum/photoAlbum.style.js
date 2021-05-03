import styled from 'styled-components';

import { getValueFromTheme } from '../../common/utils';
import { StyledDiv } from '../../common/style/index';
import { layout } from 'styled-system';

export const PhotoAlbumDiv = styled(StyledDiv)`
  ${layout};
  background-color: ${getValueFromTheme('primaryBgColorDiv')};
`;

export const PhotoAlbumNameDiv = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${getValueFromTheme('primaryBgColor')};
`;
