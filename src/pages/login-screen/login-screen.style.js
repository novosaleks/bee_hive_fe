import styled from 'styled-components';
import {media, PrimaryBackground} from '../../common/style';
import {getValueFromTheme} from '../../common/utils';

import {Link} from 'react-router-dom';

export const LoginContainer = styled(PrimaryBackground)`
  display: flex;
  justify-content: space-around;
  padding: 15px;
  flex-wrap: wrap;
  align-items: center;
  gap: 50px;
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
  color: ${getValueFromTheme('textColor')};

  ${media.mobile} {
    display: none;
  }
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


