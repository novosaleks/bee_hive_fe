import styled from 'styled-components';
import { Button, Input } from '../../common/style';

export const ChatModalButton = styled(Button)`
    font-size: 1.3rem;
`;
export const ChatModalInput = styled(Input)`
    border-bottom: 2px solid #000;
    &::placeholder {
        color: #000;
    }
`;
