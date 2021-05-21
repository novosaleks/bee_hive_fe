import styled from 'styled-components';
import { centerAlignedColumn, CommonForm } from '../../common/style';

export const Form = styled(CommonForm)`
    padding-bottom: 150px;
    ${centerAlignedColumn};
    gap: 55px;
`;

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: space-around;
    align-items: center;
`;

export const FormBlock = styled.div`
    width: 345px;
    display: flex;
    flex-direction: column;
    gap: 74px;
`;

export const GroupedInputs = styled.div`
    display: flex;
    gap: 2rem;
`;
