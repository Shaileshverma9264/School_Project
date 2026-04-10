import React from "react";
import { Grid, CardMedia, Card } from "@mui/material";
import image1 from "../images/galleryimages/image1.jpeg";

const images = [image1, image1, image1, image1, image1, image1, image1, image1];

export default function GalleryGrid() {
  return (
    <Grid container spacing={2}>
      {images.map((src, i) => (
        <Grid item xs={12} sm={6} md={3} key={i}>
          <Card>
            <CardMedia
              sx={{
                height: 150,
                objectFit: "contain",
              }}
              component="img"
              image={src}
              alt={`img-${i}`}
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
