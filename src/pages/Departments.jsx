import React from 'react';
import { Grid, Typography } from '@mui/material';
import DepartmentCard from '../components/DepartmentCard';

const depts = [
  { name: 'Computer Science', head: 'Dr. A. Mehta' },
  { name: 'Physics', head: 'Dr. R. Sharma' },
  { name: 'Commerce', head: 'Dr. P. Verma' },
  { name: 'Arts', head: 'Dr. S. Singh' }
];

export default function Departments(){
  return (
    <div>
      <Typography variant="h4" gutterBottom>Departments</Typography>
      <Grid container spacing={2}>
        {depts.map((d,i)=>(
          <Grid item xs={12} sm={6} md={3} key={i}>
            <DepartmentCard {...d} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
