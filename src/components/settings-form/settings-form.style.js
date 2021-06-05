import styled from 'styled-components';
import { CommonForm, media } from '../../common/style';
import { getValueFromTheme } from '../../common/utils';
import { fontSize } from 'styled-system';

export const Form = styled(CommonForm)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;

    ${media.mobile} {
        gap: 20px;
    }
`;

export const Label = styled.label`
    flex-basis: 120px;
    color: ${getValueFromTheme('settingText')};
    cursor: pointer;

    ${fontSize}
`;
