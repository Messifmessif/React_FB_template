import Feed from "./comoponents/Feed";
import Navbar from "./comoponents/Navbar";
import Rightbar from "./comoponents/Rightbar";
import Sidebar from "./comoponents/Sidebar";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
// import { ThemeProvider } from "@emotion/styled";
import { ThemeProvider } from "@emotion/react";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
let theme = createTheme();
theme = responsiveFontSizes(theme);
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Navbar />
        <Stack direction="row" spacing={1} justifyContent="space-between">
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
