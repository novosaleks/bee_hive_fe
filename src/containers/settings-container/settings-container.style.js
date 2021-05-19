import styled from 'styled-components';
import {media} from "../../common/style";

export const SettingsWrapper = styled.div`
  width: 100%;
`

export const FormContainer = styled.div`
  padding: 0 10px 0 73px;
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  gap: 41px;
  
  ${media.mobile} {
    padding-left: 5px;
  }
`;

export const SettingTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  padding-left: 20px;
`
