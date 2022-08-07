import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  ListItemButton,
  ListItem,
  Toolbar,
  Divider,
  Drawer,
  ListItemIcon,
  ListItemText,
  List,
} from "@mui/material";
// import{ MailIcon} from "@mui/icons-material";
// import{ InboxIcon} from "@mui/icons-material";

// import { Icon } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import InboxIcon from '@mui/icons-material/Inbox';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ff9800",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {/* <Container>
        <Typography color="primary" variant="h4">
          take a note 
        </Typography>
        <TextField id="standard-basic" label="Title" variant="standard" />
        <TextField id="standard-basic" label="Title" variant="outlined" multiline />
        <Button color="secondary" variant="contained">
          send
        </Button>
        {/* <Typography color="primary" variant="h4" >
          hello there
        </Typography> */}
      {/* </Container> */}
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
         
          "& .MuiDrawer-paper": {
            width: 260,
            boxSizing: "border-box",
            backgroundColor: "#101f33",
            color:'rgba(255,255,255,0.7)',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider sx={{backgroundColor:'rgba(255,255,255,0.7)'}}/>
        <List>
          {["Inbox", "Starred", "Send email", "Drafts","Settings","Look Out", "My conversations"].map((text, index) => (
            <ListItem key={text} 
            disablePadding
            >
              <ListItemButton>
                <ListItemIcon
                sx={{ color:'rgba(255,255,255,0.7)'}}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <EmailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{backgroundColor:'rgba(255,255,255,0.7)'}}/>
      </Drawer >
    </ThemeProvider>
  );
}

export default App;
