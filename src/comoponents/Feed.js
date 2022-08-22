import React from "react";
import { Box } from "@mui/system";
import Posts from "./Posts";

export default function Feed() {
  const responsive={
    padding:{
      xs:0,
      sm:1
    }
  }
  return (
    <Box bgcolor="" flex={4} sx={responsive}>
      <Posts />
      <Posts />
      <Posts />
      <Posts />
      <Posts />
    </Box>
  );
}
