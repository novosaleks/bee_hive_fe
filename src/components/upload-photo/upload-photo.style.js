import styled from 'styled-components';
import { fontSize } from 'styled-system';
import { media } from '../../common/style';
import { getValueFromTheme } from '../../common/utils';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;

    ${media.mobile} {
        gap: 20px;
    }
`;

export const Title = styled.h3`
    flex-basis: 120px;
    color: ${getValueFromTheme('settingText')};
    font-weight: 400;
    cursor: pointer;
    ${fontSize}
`;

export const Label = styled.label`
    width: 30px;
    height: 30px;
    border: 1px solid ${getValueFromTheme('primaryColor')};
    border-radius: 50%;
    margin: 0;
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
    span {
        position: relative;
        left: 20%;
    }
`;
