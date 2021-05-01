import styled from 'styled-components';
import { Button } from '../../common/style/index';
import { getValueFromTheme } from '../../common/utils';
import { space } from 'styled-system';

export const InputPost = styled.input`
  border: 2px solid #F15A29;
  background: none;
  min-height: 65px;
  width: 100%;
  margin-top:3%;
  color: ${getValueFromTheme('inputColor')};
  ${space}
  &::placeholder {
    color: ${getValueFromTheme('inputColor')};
    opacity: 0.6;
  }
`;

export const PostButton = styled(Button)`
  background-color:transparent;
  align-self: flex-end;
`