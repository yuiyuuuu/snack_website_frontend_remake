import * as React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import { Remove, Add, RemoveShoppingCart } from '@material-ui/icons';

const CartItem = () => {
  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '25px',
        margin: '20px',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component='div' variant='h5'>
            Lays
          </Typography>
          <Typography
            variant='subtitle1'
            color='text.secondary'
            component='div'
          >
            salty
          </Typography>
          <Typography component='div' variant='h6'>
            price : $99
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton>
            <Remove />
          </IconButton>
          Qty : 1
          <IconButton>
            <Add />
          </IconButton>
          <IconButton>
            <RemoveShoppingCart />
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component='img'
        sx={{ width: 200 }}
        image='https://images-na.ssl-images-amazon.com/images/I/81vJyb43URL._SL1500_.jpg'
      />
    </Card>
  );
};

export default CartItem;
