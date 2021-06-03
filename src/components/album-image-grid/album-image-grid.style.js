import styled from 'styled-components';

export const ImgGrid = styled.div`
    margin: 20px 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;
    height: 80%;
    overflow: auto;
    div {
        overflow: hidden;
        height: 0;
        padding: 50% 0;
        /* padding controls height, will always be perfectly square regardless of width */
        position: relative;
        opacity: 0.8;
        img {
            min-width: 100%;
            min-height: 100%;
            max-width: 150%;
            position: absolute;
            top: 0;
            left: 0;
            border: 1px solid #f9f9fd;
        }
    }
    p {
        width: 270px;
        font-style: italic;
        text-align: left;
        font-weight: 500;
        @media (max-width: 360px) {
            width: 160px;
        }
    }
    &::-webkit-scrollbar {
        width: 3px;
        background-color: #f9f9fd;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: #4a8367;
    }
    &::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: #f9f9fd;
    }
`;
