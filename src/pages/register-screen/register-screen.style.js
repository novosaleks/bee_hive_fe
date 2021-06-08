import styled from 'styled-components';
import { getValueFromTheme } from '../../common/utils';

export const RegisterContainer = styled.div`
    background-color: ${getValueFromTheme('primaryBgColor')};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    gap: 70px;
`;
