import styled from 'styled-components';
import { getValueFromTheme } from '../../common/utils';
export const SelectContainer = styled.label`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    span {
        color: ${getValueFromTheme('settingText')};
    }
    select {
        background-color: ${getValueFromTheme('primaryBgColor')};
        color: ${getValueFromTheme('textColor')};
    }
`;
