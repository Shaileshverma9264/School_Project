import React from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';

export default function Contact(){
  return (
    <Box component="form" sx={{ maxWidth: 600 }}>
      <Typography variant="h4" gutterBottom>Contact Us</Typography>
      <TextField fullWidth label="Name" margin="normal" />
      <TextField fullWidth label="Email" margin="normal" />
      <TextField fullWidth label="Message" margin="normal" multiline rows={4} />
      <Button variant="contained" sx={{ mt:2 }}>Send</Button>
    </Box>
  );
}
