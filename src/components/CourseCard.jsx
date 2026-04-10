import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

export default function CourseCard({ title, subject, seats }) {
  return (
    <Card>
      <CardContent>
        <Typography color={"red"} variant="h5">
          {title}
        </Typography>
        <Typography variant="body2">
          <Typography variant="h6">Subject:</Typography> {subject}
        </Typography>
        {/* <Typography variant="body2">Seats: {seats}</Typography> */}
      </CardContent>
      <CardActions>
        <Button size="small">Apply</Button>
        <Button size="small">Details</Button>
      </CardActions>
    </Card>
  );
}
