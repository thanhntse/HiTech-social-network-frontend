import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import Layout from "../layout/Layout";

function App() {
  const [mode, setMode] = useState<any>("light");

  const toggleTheme = () => {
    setMode(mode === "light" ? "dark" : "light");
    document.documentElement.classList.toggle('dark');
  };

  const darkTheme = createTheme({
    typography: {
      fontFamily: 'Plus Jakarta Sans, sans-serif'
    },
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Layout
        mode={mode}
        toggleMode={toggleTheme}
      />
    </ThemeProvider>
  );
}

export default App;
