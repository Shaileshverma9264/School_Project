import React from "react";
import { Grid, Typography } from "@mui/material";
import CourseCard from "../components/CourseCard";

const data = [
  { title: "B.Sc Computer Science", duration: "3 years", seats: 60 },
  { title: "B.A. English", duration: "3 years", seats: 50 },
  { title: "B.Com", duration: "3 years", seats: 80 },
  { title: "M.Sc Physics", duration: "2 years", seats: 30 },
];

export default function Courses() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Courses
      </Typography>
      <Grid container spacing={2}>
        {data.map((c, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <CourseCard {...c} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
