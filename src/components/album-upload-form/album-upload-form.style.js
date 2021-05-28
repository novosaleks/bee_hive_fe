import styled from 'styled-components';
import { getValueFromTheme } from '../../common/utils';

export const Form = styled.form`
    margin: 30px auto 10px;
    text-align: center;
`;
export const Label = styled.label`
    display: block;
    width: 30px;
    height: 30px;
    border: 1px solid ${getValueFromTheme('primaryColor')};
    border-radius: 50%;
    margin: 10px auto;
    line-height: 18px;
    color: ${getValueFromTheme('primaryColor')};
    font-weight: bold;
    font-size: 24px;
    cursor: pointer;
    &:hover {
        background: ${getValueFromTheme('primaryColor')};
        color: white;
    }
    input {
        height: 0;
        width: 0;
        opacity: 0;
    }
`;

export const Output = styled.div`
    height: 60px;
    font-size: 0.8rem;
    .progress-bar {
        height: 5px;
        background: ${getValueFromTheme('primaryBgColor')};
        margin-top: 20px;
    }
`;
export const Error = styled.div`
    color: red;
`;
