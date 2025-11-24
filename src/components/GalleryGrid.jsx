import React from "react";
import { Grid, CardMedia, Card } from "@mui/material";

const images = [
  "https://www.k12digest.com/wp-content/uploads/2024/03/1-3.jpg",
  "https://www.k12digest.com/wp-content/uploads/2024/03/1-3.jpg",
  "https://www.k12digest.com/wp-content/uploads/2024/03/1-3.jpg",
  "https://www.k12digest.com/wp-content/uploads/2024/03/1-3.jpg",
  "https://www.k12digest.com/wp-content/uploads/2024/03/1-3.jpg",
  "https://www.k12digest.com/wp-content/uploads/2024/03/1-3.jpg",
  "https://www.k12digest.com/wp-content/uploads/2024/03/1-3.jpg",
  "https://www.k12digest.com/wp-content/uploads/2024/03/1-3.jpg",
];

export default function GalleryGrid() {
  return (
    <Grid container spacing={2}>
      {images.map((src, i) => (
        <Grid item xs={12} sm={6} md={3} key={i}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={src}
              alt={`img-${i}`}
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
