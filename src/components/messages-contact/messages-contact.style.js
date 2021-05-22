import styled from 'styled-components';
import { StyledDiv } from '../../common/style';
import { getValueFromTheme } from '../../common/utils';

export const MessagesContactsDiv = styled(StyledDiv)`
    cursor: pointer;
    &:hover {
        background-color: ${getValueFromTheme('hoverColor')};
    }
`;
