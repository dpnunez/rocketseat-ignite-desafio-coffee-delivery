import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.base.text};
    line-height: 1.3;
  }

  h1 {
    color: ${({ theme }) => theme.base.title};
  }

  h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.base.subtitle};
  }

  body, input, select, textarea, button {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  a, button {
    cursor: pointer;
  }

  button {
    border: 0;
    background: none;
  }
`;
