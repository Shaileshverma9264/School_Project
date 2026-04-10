import React from "react";
import { duration, Grid, Typography } from "@mui/material";
import CourseCard from "../components/CourseCard";
import { Subject } from "@mui/icons-material";

const data = [
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
