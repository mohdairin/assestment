import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({data}) {
  return (
    <Card sx={{ maxWidth: 345 ,marginTop:'10px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={data.avatar}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.first_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {data.first_name} {data.last_name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}