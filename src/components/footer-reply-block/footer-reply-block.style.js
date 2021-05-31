import styled from 'styled-components';
import { StyledText } from '../../common/style';

export const ReplyPreview = styled(StyledText)`
    color: #c4c4c4;
    font-size: 0.8rem;
    width: 100%;
    cursor: pointer;

    &::before,
    &::after {
        content: '';
        height: 0.6px;
        width: 60px;
        background-color: #c4c4c4;
        display: inline-block;
        position: relative;
        vertical-align: middle;
    }
    &::before {
        margin-right: 0.5%;
    }
    &::after {
        margin-left: 0.5%;
    }
    @media (max-width: 385px) {
        text-align: left;
        &::before,
        &::after {
            display: none;
        }
    }
`;
export const ReplyUL = styled.ul`
    width: 100%;
    @media (max-width: 421px) {
        width: 90vw;
        margin-left: -35%;
    }
    li {
        width: 100%;
    }
`;
