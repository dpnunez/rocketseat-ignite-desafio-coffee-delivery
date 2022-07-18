import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.base.text};
    line-height: 1.3;
  }

  h1 {
    color: ${({ theme }) => theme.colors.base.title};
  }

  h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.base.subtitle};
  }

  body, input, select, textarea, button {
    font-family: ${({ theme }) => theme.fonts.primary};
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

  input {
    background: none;
    border: 0;
  }
`;
