import React from "react";
import { Typography, Grid, Card, CardContent } from "@mui/material";

const faculty = [
  { name: "Dr. A. Mehta", dept: "Computer Science" },
  { name: "Dr. R. Sharma", dept: "Physics" },
  { name: "Dr. P. Verma", dept: "Commerce" },
];

export default function Faculty() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Faculty
      </Typography>
      <Grid container spacing={2}>
        {faculty.map((f, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card>
              <CardContent>
                <Typography variant="h6">{f.name}</Typography>
                <Typography variant="body2">{f.dept}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
