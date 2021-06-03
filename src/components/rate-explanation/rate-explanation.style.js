import styled, { css } from 'styled-components';
import { StyledDiv, StyledText, media } from '../../common/style/index';
import { getValueFromTheme } from '../../common/utils';

const CSS__PHOTO_MODAL = css`
    left: 15%;
    top: 6.5%;
    ${media.miniMobile} {
        left: -15%;
        top: 0;
    }
`;

export const ExplanationStyledDiv = styled(StyledDiv)`
    background-color: ${getValueFromTheme('primaryBgColor')};
    width: 155px;
    height: 155px;
    padding: 1%;
    position: absolute;
    left: ${props => props.hintLeft}px;
    top: ${props => props.hintBottom}px;
    border: 1px solid ${getValueFromTheme('inputColor')};

    ${media.miniMobile} {
        left: 30%;
    }
    ${props => props.photoModal && CSS__PHOTO_MODAL}
`;
export const ExplanationStyledText = styled(StyledText)`
    opacity: 0.7;
    font-size: 1em;
    margin: 0;
    padding: 0;
`;
