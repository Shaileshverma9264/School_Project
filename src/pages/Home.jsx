import React from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import CourseCard from "../components/CourseCard";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const courses = [
    { title: "B.Sc Computer Science", duration: "3 years", seats: 60 },
    { title: "B.Com", duration: "3 years", seats: 80 },
    { title: "M.Sc Physics", duration: "2 years", seats: 30 },
  ];

  return (
    <Box>
      <Paper sx={{ p: 4, mb: 4 }}>
        <Typography variant="h3" gutterBottom>
          Welcome to MyCollege
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Empowering students for a better future through quality education and
          holistic development.
        </Typography>
        <Button variant="contained" onClick={() => navigate("/admissions")}>
          Explore Admissions
        </Button>
      </Paper>

      <Typography variant="h5" sx={{ mb: 2 }}>
        Popular Courses
      </Typography>
      <Grid container spacing={2}>
        {courses.map((c, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <CourseCard {...c} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
