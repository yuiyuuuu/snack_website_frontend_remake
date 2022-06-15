import React from 'react';
import useStyles from './styles';
import { Typography } from '@material-ui/core';

const Checkout = () => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.content}>CheckOut page</Typography>
    </>
  );
};

export default Checkout;
