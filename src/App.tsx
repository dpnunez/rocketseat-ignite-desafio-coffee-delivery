import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export const App: React.FC = () => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />

    <Router />
  </ThemeProvider>
);
