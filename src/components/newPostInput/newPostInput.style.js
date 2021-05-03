import styled from 'styled-components';
import { Button, Input } from '../../common/style/index';
import { getValueFromTheme } from '../../common/utils';

export const InputPost = styled(Input)`
  border: 2px solid #F15A29;
  min-height: 65px;
  margin-top: 3%;
  color: ${getValueFromTheme('inputColor')};

  &::placeholder {
    opacity: 0.6;
  }
`;

export const PostButton = styled(Button)`
  background-color: transparent;
  align-self: flex-end;
`;
