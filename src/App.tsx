import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";

import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { GitProvider } from "./contexts/GitContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GitProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </GitProvider>
    </ThemeProvider>
  );
}
