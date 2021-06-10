import styled from 'styled-components';

export const ImgModal = styled.div`
    padding: 5%;
    display: flex;
    flex-direction: column;
    box-sizing: content-box;
    width: 75%;
    margin: 3% auto;
    overflow: auto;
    max-height: 80%;
    &::-webkit-scrollbar {
        width: 3px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: #4a8367;
    }
    &::-webkit-scrollbar-track {
        border-radius: 10px;
      
    }
`;

