import { ThemeProvider } from "styled-components";
import { GlobalStyles, defaulTheme } from "./common/styles";

import { Dashboard } from "./components";

export function App() {
  return (
    <>
      <ThemeProvider theme={defaulTheme}>
        <Dashboard />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}
