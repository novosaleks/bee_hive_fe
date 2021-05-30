import styled from 'styled-components';
import { DropDown, SubmitButton } from '../../common/style/index';
import { getValueFromTheme } from '../../common/utils';

export const DropDownAlbum = styled(DropDown)`
    background-color: ${getValueFromTheme('primaryBgColor')};
    width: 350px;
    height: 300px;
    right: ${props => props.albomBlock && '10%'};
    @media (max-width: 600px) {
        width: 250px;
        height: 200px;
    }
    @media (max-width: 300px) {
        width: 200px;
        height: 200px;
    }
`;
export const Input = styled.input`
    display: block;
    width: 100%;
    padding: 0 20px;
    margin-bottom: 10px;
    background: #e9eff6;
    line-height: 40px;
    border-width: 0;
    border-radius: 20px;
`;
export const Textarea = styled.textarea`
    display: block;
    width: 100%;
    padding: 0 20px;
    margin-bottom: 10px;
    background: #e9eff6;
    line-height: 40px;
    border-width: 0;
    border-radius: 20px;
`;

export const ButtonsBlock = styled.div`
    display: flex;
    align-self: flex-end;
    flex-direction: column;
`;

export const Submit = styled(SubmitButton)`
    width: 23vh;
    @media (max-width: 600px) {
        width: 17vh;
    }
`;
