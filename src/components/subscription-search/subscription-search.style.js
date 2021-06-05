import styled from 'styled-components';
import { media } from '../../common/style';

export const Img = styled.img`
    width: 30px;
    height: 30px;
    opacity: 0.8;
    align-self: flex-start;
    cursor: pointer;
    &:hover {
        opacity: 1;
    }
    ${media.mobile} {
        align-self: flex-end;
    }
`;
