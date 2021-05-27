import styled from 'styled-components';
import { StyledDiv } from '../../common/style/index';
import { getValueFromTheme } from '../../common/utils';
import { layout } from 'styled-system';

export const TextDiv = styled(StyledDiv)`
    margin-top: 5%;
    padding: 2%;
    white-space: pre-wrap;
    ${layout};
    background-color: ${getValueFromTheme('primaryBgColorDiv')};
`;
