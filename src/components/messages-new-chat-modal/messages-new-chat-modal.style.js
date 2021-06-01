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

export const ModalHeader = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1rem 1rem;
    border-bottom: 1px solid #dee2e6;
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);
`;

export const ModalBody = styled.div`
    position: relative;
    flex: 1 1 auto;
    padding: 1rem;
    overflow: auto;
`;
