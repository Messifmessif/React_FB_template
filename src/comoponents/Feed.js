import React from "react";
import { Box } from "@mui/system";
import Home from "./Home";
import Test from "./Test";
import Profile from "./Profile";

import { Routes, Route } from "react-router-dom";

export default function Feed() {
  const responsive = {
    padding: {
      xs: 0,
      sm: 1,
    },
  };
  return (
    <Box bgcolor="" flex={4} sx={responsive}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {/* <Home /> */}
    </Box>
  );
}
