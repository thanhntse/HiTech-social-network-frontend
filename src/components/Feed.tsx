import React from "react";
import Posts from "./Posts";
import { Box } from "@mui/material";

export const Feed = () => {
  return (
    <Box flex={4} padding={2}>
      <Posts />
    </Box>
  );
};

export default Feed;
