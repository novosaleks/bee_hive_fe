import styled from 'styled-components';
import { PrimaryBackground } from '../../common/style';
import { getValueFromTheme } from '../../common/utils';

import { Link } from 'react-router-dom';

export const LoginContainer = styled(PrimaryBackground)`
  display: flex;
  justify-content: space-between;
  padding: 230px 180px;
  align-items: center;
`;

export const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PresentationText = styled.div`
  margin-top: 55px;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  color: ${getValueFromTheme('textColor')}
`;

export const CreateAccountLink = styled(Link)`
  background: none;
  border: none;
  font-size: 36px;
  border-bottom: 2px solid #532111;;
  display: block;
  max-width: 265px;
  margin: 0 auto;
  text-align: center;
  color: ${getValueFromTheme('primaryColor')};
  
  &:hover {
    text-decoration: none;
    color: ${getValueFromTheme('primaryColor')};
  }
`;

export const OptionText = styled.div`
  text-align: center;
  margin: 55px 0;
`


