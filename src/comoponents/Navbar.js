import { AppBar, InputBase, Toolbar, Typography, Avatar } from "@mui/material";
import { Pets, Notifications } from "@mui/icons-material";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import React from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
const Search = styled("div")({
  backgroundColor: "white",
  width: "40%",
  borderRadius: 10,
  padding: "0 20px",
});
const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "30px",
  alignItems: "center",
  cursor: "pointer",
  // [theme.breakpoints.down("sm")]: {
  //   display: "none",
  // },
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  // [theme.breakpoints.up("sm")]: {
  //   display: "none",
  // },
}));
export default function Navbar({mode}) {
  return (
    <AppBar position="sticky"  elevation={0}>
      <StyledToolbar>
        {/* TITLE COMPONENT  */}
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Lorem ipsum
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />

        {/* SEARCH COMPONENT */}
        <Search>
          <InputBase placeholder="Search" sx={{width:"100%",color:"#000"}}/>
        </Search>
        {/* ICONS COMPONENT */}
        <Icons>
          <Badge badgeContent={3} color="error">
            <Notifications />
          </Badge>
          <Badge badgeContent={4} color="error">
            <MailIcon sx={{ color: "white" }} />
          </Badge>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 30, height: 30 }}
          />
        </Icons>

        <UserBox sx={{display:{sm:"none"}}}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 30, height: 30 }}
          />
          <Typography> John Doe</Typography>
        </UserBox>
      </StyledToolbar>
    </AppBar>
  );
}
