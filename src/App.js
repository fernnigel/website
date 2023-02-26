import "./App.css";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Projects from "./components/Projects";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

function App() {
  let theme = createTheme();

  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <Home />
      <Resume />
      <Projects />
    </ThemeProvider>
  );
}

export default App;
