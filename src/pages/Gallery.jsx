import React from "react";
import { Typography } from "@mui/material";
import GalleryGrid from "../components/GalleryGrid";

export default function Gallery() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Gallery
      </Typography>
      <GalleryGrid />
    </div>
  );
}
