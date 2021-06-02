import styled from 'styled-components';
import { getValueFromTheme } from '../../common/utils';
import { media } from '../../common/style';
import { Link } from 'react-router-dom';

export const Error = styled.div`
  margin: 15rem auto 0;
  text-align: center;
  width: 40%;
  color: ${getValueFromTheme('primaryColor')};

  ${media.laptop} {
    width: 50%;
  }

  ${media.mobile} {
    width: 80%;
  }
`;

export const ErrorCode = styled.h1`
  font-size: 5rem;
`;

export const ErrorTitle = styled.h2`
  margin-top: 2rem;
  font-size: 2rem;
`;

export const UnstyledLink = styled(Link)`
  color: ${getValueFromTheme('textColor')};
  &:hover {
    text-decoration: none;
    color: ${getValueFromTheme('textColor')};
  }
`;


