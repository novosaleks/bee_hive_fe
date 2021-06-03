import styled from 'styled-components';
import { getValueFromTheme } from '../../common/utils';
import { layout } from 'styled-system';

export const ComponentEditForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const TextareaDiv = styled.textarea`
    margin-top: 5%;
    padding: 2%;
    width: 100%;
    align-self: flex-end;
    ${layout};
    background-color: ${getValueFromTheme('primaryBgColorDiv')};
    color: ${getValueFromTheme('textColor')};
    box-shadow: inset 0 0 10px #fcfcd4;
`;
