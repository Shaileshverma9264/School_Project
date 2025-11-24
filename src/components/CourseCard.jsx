import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

export default function CourseCard({ title, duration, seats }){
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">Duration: {duration}</Typography>
        <Typography variant="body2">Seats: {seats}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Apply</Button>
        <Button size="small">Details</Button>
      </CardActions>
    </Card>
  );
}
