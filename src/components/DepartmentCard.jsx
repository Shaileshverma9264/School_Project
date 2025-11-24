import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

export default function DepartmentCard({ name, head }){
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2">Head: {head}</Typography>
      </CardContent>
    </Card>
  );
}
