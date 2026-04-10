import React from "react";
import { Grid, Typography } from "@mui/material";
import DepartmentCard from "../components/DepartmentCard";

const depts = [
  { name: "Physics", head: "Mr.Sunil Kumar (Ass.Teacher)" },
  { name: "Chemistry", head: "Dr. P. Verma" },
  { name: "Arts", head: "Dr. S. Singh" },
  { name: "Computer", head: "Dr. A. Mehta" },
  { name: "Home Science", head: "Dr. A. Mehta" },
  { name: "Agriculture", head: "Dr. A. Mehta" },
  { name: "Biology", head: "Dr. A. Mehta" },
  { name: "NCC", head: "Dr. A. Mehta" },
  { name: "Scout & Guide", head: "Dr. A. Mehta" },
];

export default function Departments() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Departments
      </Typography>
      <Grid container spacing={2}>
        {depts.map((d, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <DepartmentCard {...d} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
