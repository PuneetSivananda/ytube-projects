import { Box, createTheme, Stack } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Add from "./components/Add";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";


function App() {
  const [mode, setMode] = useState("light")

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box bgcolor="background.default" color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
