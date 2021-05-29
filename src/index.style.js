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

  //* {
  //  transition: 1.5s;
  //}
`;

export default GlobalStyles;
