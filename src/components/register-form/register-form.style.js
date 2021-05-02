import styled from 'styled-components';
import { centerAlignedColumn } from '../../common/style';

export const Form = styled.form`
  padding-bottom: 150px;
  ${centerAlignedColumn};
  gap: 55px;
`;

export const FormContainer = styled.div`
  display: flex;
  gap: 187px;
  align-items: center;
`;

export const FormBlock = styled.div`
  width: 345px;
  display: flex;
  flex-direction: column;
  gap: 74px;
`;

export const GroupedInputs = styled.div`
  display: flex;
  gap: 2rem;
`;
