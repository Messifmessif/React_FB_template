import Feed from "./comoponents/Feed";
import Navbar from "./comoponents/Navbar";
import Rightbar from "./comoponents/Rightbar";
import Sidebar from "./comoponents/Sidebar";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import {useState} from 'react';
import Createpost from './comoponents/Createpost';
let theme = createTheme();
theme = responsiveFontSizes(theme);



function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Navbar color="error" />
        <Stack direction="row" justifyContent="space-between">
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
        <Createpost open={open} setOpen={setOpen} handleOpen={handleOpen}/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
