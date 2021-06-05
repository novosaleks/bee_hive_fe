import styled from 'styled-components';
import { StyledText } from '../../common/style';

export const ModalDialog = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 4;
`;
export const ModalContent = styled.div`
    display: block;
    width: 80vw;
    height: 60vh;
    margin: 20px auto;
    box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
    background-color: #fff;
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
    height: 80%;
    overflow: auto;
`;
