import styled from 'styled-components';
import { StyledDiv } from '../../common/style';
import { getValueFromTheme } from '../../common/utils';

export const AddresseeInfoBlock = styled.div`
    background-color: #00594a;
    width: 100%;
    display: flex;
    justify-content: start;
    margin-bottom: 3%;
    p {
        margin: 0;
        color: #fff;
    }
    .reply-content {
        width: 420px;
        margin: 0 5px;
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-style: italic;
        opacity: 0.9;
        &::before {
            content: open-quote;
        }
        &::after {
            content: close-quote;
        }
    }
    @media (max-width: 375px) {
        width: 90vw;
        position: relative;
        right: 0;
        margin-right: 35%;
        .reply-content {
            width: 120px;
        }
    }
`;
export const ReplyCommentDiv = styled(StyledDiv)`
    border: 2px solid #00594a;
`;
