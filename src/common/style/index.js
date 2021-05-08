import styled, { css } from 'styled-components';
import { space, layout, typography } from 'styled-system';

import { getValueFromTheme } from '../utils';
import { Link } from 'react-router-dom';

export const PrimaryBackground = styled.div`
  background-color: ${getValueFromTheme('primaryBgColor')};
`;
export const PrimaryBackgroundPage = styled.div`
  background-color: ${getValueFromTheme('primaryBgColorPage')};
`;

export const StyledPageWrapper = styled(PrimaryBackgroundPage)`
  display: flex;
  min-height: 100vh;
  padding: 5%;
`;

export const Input = styled.input`
  position: relative;
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

  &.required {
    border: 2px solid #002e6b;
  }

  &.v-invalid {
    border: 2px solid red;
  }
`;

export const Button = styled.button`
  background-color: ${props => props.backgroundColor || '#fff'};
  border: 2px solid ${props => props.borderColor ||
          getValueFromTheme('primaryColor')};
  font-size: ${props => props.backgroundColor || '36px'};
  ${space}
  ${layout}
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

export const StyledText = styled.p`
  color: ${props => props.color || getValueFromTheme('textColor')};
  font-weight: 200;
  ${typography};
  text-align: ${props => props.align || 'center'};
  padding: 0;
  margin: 0;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'column'};
  width: ${props => props.width || '100%'};
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.content || 'center'};
  ${space};
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

export const NavLink = styled(Link)`
  color: ${getValueFromTheme('textColor')};

  &:hover {
    text-decoration: none;
    color: ${getValueFromTheme('primaryColor')};
  }
`;

export const DivLine = styled.div`
  height: 2px;
  width: 100%;
  background-color: ${getValueFromTheme('primaryColor')};
`;
