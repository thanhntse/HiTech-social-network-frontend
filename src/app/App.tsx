import { useState } from "react";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import Add from "../components/Add";
import Navbar from "../components/Navbar";
import Layout from "../layout/Layout";

function App() {
  const [mode, setMode] = useState<any>("light");
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
      {/* <Box className="bg-gray-100 font-primary text-gray-800" color={"text.primary"}>
        <Sidebar setMode={setMode} mode={mode} />
        <Navbar />
        <Stack direction="row" justifyContent="space-between" spacing={2}>
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box> */}
      <Layout />
    </ThemeProvider>
  );
}

export default App;
