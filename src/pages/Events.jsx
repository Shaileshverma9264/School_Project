import React from 'react';
import { Grid, Typography } from '@mui/material';
import EventCard from '../components/EventCard';

const events = [
  { title: 'TechFest 2025', date: 'Jan 12, 2025', desc: 'Annual technical fest for innovators.' },
  { title: 'Cultural Night', date: 'Feb 25, 2025', desc: 'A night full of performances & creativity.' }
];

export default function Events(){
  return (
    <div>
      <Typography variant="h4" gutterBottom>Events</Typography>
      <Grid container spacing={2}>
        {events.map((e,i)=>(
          <Grid item xs={12} sm={6} md={4} key={i}>
            <EventCard {...e} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
