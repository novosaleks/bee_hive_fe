import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  input[type=date]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  input[type=date]::-webkit-calendar-picker-indicator {
    -webkit-appearance: none;
    display: none;
  }
  *{
    transition: 1s;
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

export default GlobalStyles;
