import Feed from "./comoponents/Feed";
import Navbar from "./comoponents/Navbar";
import Rightbar from "./comoponents/Rightbar";
import Sidebar from "./comoponents/Sidebar";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import { useState } from "react";
import Createpost from "./comoponents/Createpost";
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [mode ,setMode]= useState('light');

  let theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Navbar mode={mode}/>
        <Stack direction="row" justifyContent="space-between">
          <Sidebar mode={mode} setMode={setMode}/>
          {/* feed component contains all routes  which will be diplay inside the feed container  */}
          <Feed />
          <Rightbar />
        </Stack>
        <Createpost
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
          mode={mode}
        />
      </Box>
    </ThemeProvider>
  );
}

export default App;
