import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function SearchBasicCard({query}) {
  return (
      <Card variant="outlined" sx={{maxWidth: 520, margin: "auto", marginTop: "2rem" }}>
        <CardContent>
          <Typography variant="h5" component="div">
           Search Resulsts for - {query}
          </Typography>
          <Typography variant="body2">
            Love Animals. ❣️
          </Typography>
        </CardContent>
    </Card>
  );
}
