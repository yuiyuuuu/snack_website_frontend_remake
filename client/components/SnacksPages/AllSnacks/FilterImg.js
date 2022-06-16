import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function FilterImg({ flavor, img }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='140'
          sx={{ objectFit: 'contain' }}
          image={img}
        />
        <CardContent>
          <Typography gutterBottom variant='h6' component='div' align='center'>
            {flavor}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
