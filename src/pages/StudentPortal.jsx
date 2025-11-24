import React from 'react';
import { Typography, Box, Button } from '@mui/material';

export default function StudentPortal(){
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Student Portal</Typography>
      <Typography>Login to access your dashboard, results, and resources. (Placeholder)</Typography>
      <Button variant="contained" sx={{ mt:2 }}>Go to Login</Button>
    </Box>
  );
}
