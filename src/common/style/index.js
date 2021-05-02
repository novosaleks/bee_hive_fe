import styled, { css } from 'styled-components';
import { space, layout } from 'styled-system';

import { getValueFromTheme } from '../utils';

export const PrimaryBackground = styled.div`
  background-color: ${getValueFromTheme('primaryBgColor')};
`;

export const Input = styled.input`
  border: none;
  border-bottom: 2px solid ${getValueFromTheme('inputColor')};
  background: none;
  width: 100%;
  min-height: 35px;

  ${space}
  &::placeholder {
    color: ${getValueFromTheme('inputColor')};
  }
`;

export const Button = styled.button`
  background-color: #fff;
  border: 2px solid ${getValueFromTheme('primaryColor')};
  font-size: 36px;
  ${space}
  ${layout}
`;

export const StyledLabel = styled.div`
  border: 2px solid ${getValueFromTheme('primaryColor')};
  text-align: center;
  width: 80%;
  margin: 0 auto;
  ${space}
`;

export const centerAlignedColumn = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
