import styled from 'styled-components';
import { DropDown } from '../../common/style/index';
import { getValueFromTheme } from '../../common/utils';

export const DropDownAlbum = styled(DropDown)`
    background-color: ${getValueFromTheme('primaryBgColor')};
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
