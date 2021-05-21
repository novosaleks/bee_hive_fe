import styled from 'styled-components';
import { getValueFromTheme } from '../../common/utils';

import { layout } from 'styled-system';

export const Select = styled.select`
    width: 240px;
    height: 44px;
    border: 2px solid ${getValueFromTheme('primaryColor')};
    text-align-last: center;

    ${layout}
`;
