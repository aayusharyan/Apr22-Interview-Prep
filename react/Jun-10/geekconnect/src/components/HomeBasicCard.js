import * as React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

export default function HomeBasicCard() {
  return (
      <Card variant="outlined" sx={{maxWidth: 520, margin: "auto", marginTop: "2rem" }}>
        <CardContent>
          <Typography variant="h4" color="text.secondary" gutterBottom>
            Hi 👋🏻
          </Typography>
          <Typography variant="h5" component="div">
           Welcome to Geekconnect
          </Typography>
          <Typography variant="body2">
            Love Animals. ❣️
          </Typography>
        </CardContent>
    </Card>
  );
}
