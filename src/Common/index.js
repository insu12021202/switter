import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    display: flex;
    justify-content: center;
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
    margin: 0;
    padding: 0;
    background-color: #0b0409;
    height: 100vh;
  }
  button {
      outline: 0;
      border: 0;
      background-color: transparent;
  }
  input {
    border: none;
    padding: 10px;
  }
  input:focus {
    outline: none;
  }
  li {
      list-style: none;
  }
  a {
      text-decoration: none;
      color: whitesmoke;
  }
  a:hover, a:active {
      text-decoration: none;
      color: whitesmoke;
  }
  #root {
    width: 390px;
    height: 100%;
  }
`;

export default GlobalStyle;
