import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body{
      font-family: 'Source Code Pro', monospace;
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
