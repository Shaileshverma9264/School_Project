import React from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import CourseCard from "../components/CourseCard";
import { useNavigate } from "react-router-dom";
import ImageCarousel from "../components/ImageCarausel";

export default function Home() {
  const navigate = useNavigate();
  const courses = [
    {
      title: "Humanities",
      subject:
        "1.Hindi 2.English 3.Sanskrit 4.Geography 5.Civics 6.Economics 7.Music Vocal",
      seats: 60,
    },
    {
      title: "Science",
      subject:
        "1.General Hindi 2.English 3.physics 4.Chemistry 5.Biology 6.Math 7.Computer ",
      seats: 50,
    },
    {
      title: "Commerce",
      subject:
        "1.General Hindi 2.English 3.Accountancy 4.Business Studies 5.Economics",
      seats: 80,
    },
    {
      title: "Vocational",
      subject:
        "1.General Hindi 2.English 3.Typing Hindi & English 4.General Foundational",
      seats: 30,
    },
    {
      title: "Agriculture",
      subject:
        "1.Agronomy sixith 2.Ag. Economics 3.Ag Zoology 4.Animal Husbandry 5.Ag.Chemistry",
      seats: 30,
    },
    { title: "NCC", subject: "NCC", seats: 30 },
    { title: "Scout & Guide", subject: "Scout & Guide", seats: 30 },
    { title: "Music vocal", subject: "Music vocal", seats: 30 },
  ];

  return (
    <Box>
      <Paper sx={{ p: 4, mb: 4 }}>
        <Box
          sx={{
            backgroundColor: "#fff",
            p: 2,
            borderRadius: 2,
            boxShadow: 2,
          }}
        >
          <ImageCarousel />
        </Box>
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
