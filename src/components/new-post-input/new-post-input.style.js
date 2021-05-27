import styled from 'styled-components';
import { Button, media } from '../../common/style/index';
import { getValueFromTheme } from '../../common/utils';

export const InputPost = styled.textarea`
    position: relative;
    background: none;
    width: 100%;
    min-height: 35px;
    outline: none;
    transition: all 0.1s;
    border: 2px solid #f15a29;
    min-height: 65px;
    margin-top: 3%;
    color: ${getValueFromTheme('inputColor')};

    &:focus {
        border: 2px solid ${getValueFromTheme('focusColor')};
    }

    &::placeholder {
        color: ${getValueFromTheme('inputColor')};
        opacity: 0.6;
    }
`;

export const PostButton = styled(Button)`
    background-color: transparent;
    align-self: flex-end;
    ${media.laptop} {
        width: 130px;
    } ;
`;
