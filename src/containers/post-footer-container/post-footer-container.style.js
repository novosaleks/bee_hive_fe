import styled from 'styled-components';
import { StyledText } from '../../common/style';

export const PostFooterMainBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    .comments {
        width: 25px;
        height: 25px;
        cursor: pointer;
    }
`;

export const CommentsPreview = styled(StyledText)`
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
`;
