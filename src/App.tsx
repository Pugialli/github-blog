import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";

import { defaultTheme } from "./styles/themes/default";
import { Blog } from "./pages/Blog";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Blog />
    </ThemeProvider>
  );
}
