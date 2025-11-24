import React from "react";
import { Box, Typography } from "@mui/material";
import Clock from "./Clock";

export default function Footer() {
  return (
    <Box component="footer">
      <Typography align="center" className="footer-fixed">
        © {new Date().getFullYear()} MyCollege. All Rights Reserved.
        {/* {<Clock />} */}
      </Typography>
    </Box>
  );
}
