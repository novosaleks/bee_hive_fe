import styled from 'styled-components';
import { getValueFromTheme } from '../../common/utils';

export const RegisterContainer = styled.div`
  background-color: ${getValueFromTheme('#f8f5f2')};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 54px;
  gap: 70px;
`;
