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
  outline: none;
  transition: all .1s;

  ${space};

  &:focus {
    border: 2px solid ${getValueFromTheme('focusColor')};
  }

  &::placeholder {
    color: ${getValueFromTheme('inputColor')};
  }
`;

export const Button = styled.button`
  background-color: #fff;
  border: 2px solid ${getValueFromTheme('primaryColor')};
  font-size: 36px;
  outline: 2px solid transparent;
  transition: all .2s;

  ${space};
  ${layout};
  
  &:hover {
    transform: scale(1.05);
  }
  
  &:active {
    background-color: ${getValueFromTheme('primaryColor')};
    color: #fff;
  }
  
  &:focus-within {
    outline-color: ${getValueFromTheme('focusColor')};
  }
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
