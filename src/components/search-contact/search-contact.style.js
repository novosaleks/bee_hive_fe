import styled from 'styled-components';
import { StyledDiv } from '../../common/style';
import { getValueFromTheme } from '../../common/utils';

export const ContactsDiv = styled(StyledDiv)`
    flex-direction: row;
    justify-content: flex-start;
    cursor: pointer;
    padding: 5px;
    box-sizing: border-box;
    align-self: flex-start;
    background-color: #fff;
    margin-bottom: 5%;
    &:hover {
        background-color: ${getValueFromTheme('hoverColor')};
    }
    div > p:first-child {
        color: #000;
    }
`;
