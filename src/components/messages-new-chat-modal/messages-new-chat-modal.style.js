import styled from 'styled-components';
import { Input, StyledText } from '../../common/style';

export const ChatModalInput = styled(Input)`
    border-bottom: 2px solid #000;
    &::placeholder {
        color: #000;
    }
`;

export const ModalHeader = styled(StyledText)`
    color: #909ba3;
    font-weight: 500;
    font-size: 1.1em;
    padding: 3%;
    padding-bottom: 2px;
`;

export const ModalBody = styled.div`
    position: relative;
    flex: 1 1 auto;
    padding: 1rem;
    overflow: auto;
`;
