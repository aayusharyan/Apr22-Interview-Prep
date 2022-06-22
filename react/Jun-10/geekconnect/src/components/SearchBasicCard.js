import { Card, CardContent, Typography } from '@mui/material';

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
