import styled from 'styled-components';
import { StyledDiv } from '../../common/style/index';
import { getValueFromTheme } from '../../common/utils';

export const InputDiv = styled(StyledDiv)`
    background-color: ${getValueFromTheme('primaryBgColor')};
`;
