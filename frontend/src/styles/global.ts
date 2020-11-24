import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
  }

  body {
    background: #F6F6F6;
    color: #312E38;
    -webkit-box-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  h1 {
    font-family: 'Lato', sans-serif;
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
