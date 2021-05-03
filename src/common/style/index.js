import styled from 'styled-components';
import { space, layout, typography } from 'styled-system';

import { getValueFromTheme } from '../utils';


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
  background-color: ${props => props.backgroundColor || '#fff'};
  border: 2px solid ${props => props.borderColor || getValueFromTheme('primaryColor')};
  font-size: ${props => props.backgroundColor || '36px'};
  ${space}
  ${layout}
`;

export const TextCenter = styled.div`
  text-align: center;
`;

export const HrLine = styled.hr`
  width: 100%;
`;

export const StyledText = styled.p`
    color: ${props => props.color || getValueFromTheme('textColor')};
    font-weight: 200;
    ${typography};
    text-align: ${props => props.align || 'center'};
    padding:0;
    margin:0;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'column'};
  width: ${props => props.width || '100%'};
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.content || 'center'};
  ${space}
`;
