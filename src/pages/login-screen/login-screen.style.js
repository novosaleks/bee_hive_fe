import styled from 'styled-components';
import { PrimaryBackground } from '../../common/style';
import { getValueFromTheme } from '../../common/utils';

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

export const CreateAccountButton = styled.button`
  background: none;
  border: none;
  font-size: 36px;
  border-bottom: 2px solid #532111;;
  color: ${getValueFromTheme('primaryColor')};
`
