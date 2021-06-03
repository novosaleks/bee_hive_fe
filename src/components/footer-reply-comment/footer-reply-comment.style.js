import styled from 'styled-components';
import { StyledDiv } from '../../common/style';

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

    @media (max-width: 375px) {
        position: relative;
        right: 0;
        .reply-content {
            width: 120px;
        }
    }
`;
export const ReplyCommentDiv = styled(StyledDiv)`
    max-width: inherit;
    overflow: hidden;
`;
