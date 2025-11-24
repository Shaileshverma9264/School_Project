import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

export default function EventCard({ title, date, desc }){
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="caption">{date}</Typography>
        <Typography variant="body2" sx={{ mt:1 }}>{desc}</Typography>
      </CardContent>
    </Card>
  );
}
