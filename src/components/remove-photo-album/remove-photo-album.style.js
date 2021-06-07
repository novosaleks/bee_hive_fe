import styled from 'styled-components';

export const DeleteImg = styled.img`
    position: relative;
    width: 20px !important;
    left: 40%;
    cursor: pointer;
    align-self: flex-start;
    opacity: 0.7;
    &:hover {
        opacity: 1;
    }
    @media (max-width: 480px) {
        left: 20%;
    }
`;
