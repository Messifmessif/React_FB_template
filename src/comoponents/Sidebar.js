import {
  Home,
  Settings,
  AccountBox,
  Groups,
  Group,
  Article,
  Storefront,
} from "@mui/icons-material";
import {
  Box,
  ListItemButton,
  ListItemIcon,
  ListSubheader,
  List,
  ListItemText,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import React from "react";
import { Link } from "react-router-dom";
import Switch from "@mui/material/Switch";
import FormControlLabel from '@mui/material/FormControlLabel';

export default function Sidebar({ mode, setMode }) {
  const responsive = { display: { xs: "none", sm: "block" } };
  const listStyles = {
    width: "100%",
    maxWidth: "100%",
    bgcolor: "background.paper",
  };
  const modeStatus = {
    color:mode==="light"?"#000":"#fff"
  };
  return (
    <Box bgcolor="" flex={1} p={0} sx={responsive}>
      <Box position="fixed" pt={3} >
        <List
          sx={listStyles}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
            ></ListSubheader>
          }
        >
          <Link to="/">
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" sx={modeStatus} />
            </ListItemButton>
          </Link>

          <ListItemButton>
            <ListItemIcon>
              <Article />
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <Groups />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <Storefront />
            </ListItemIcon>
            <ListItemText primary="Marketplace" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>

          <Link to="/profile">
            <ListItemButton>
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" sx={modeStatus} />
            </ListItemButton>
          </Link>

          <Link to="/test">
            <ListItemButton>
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="test" sx={modeStatus} />
            </ListItemButton>
          </Link>
          <Divider />
        </List>
        <FormControlLabel control={
        <Switch 
          sx={{ marginLeft: 2 }}
          onClick={() => {
            setMode(prev => prev === "light" ? "dark" : "light");
          }}
        />
      } 
        
        label={`${mode==="light"?"dark":"light"} mode`} />
        
      </Box>
    </Box>
  );
}
