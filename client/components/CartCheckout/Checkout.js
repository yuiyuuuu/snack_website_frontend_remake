import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import PaymentIcon from '@material-ui/icons/Payment';
import LockIcon from '@material-ui/icons/Lock';

const useStyles = makeStyles({
  root: {
    marginTop: 80,
    height: '75vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  columnCard: {
    display: 'flex',
    flexDirection: 'column',
    width: '500px',
  },
  leftCard: {
    height: '20%',
    width: '100%',
  },
  paymentCard: {
    height: '60%',
    width: '100%',
  },
  rightCard: {
    height: '100%',
    width: '100%',
  },
  topRight: {
    height: '90%',
    width: '100%',
  },
  bottomRight: {
    height: '10%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: 'black',
    alignContent: 'center',
  },
  pos: {
    marginBottom: 12,
  },
});

const placeHolderSubtotal = 26.94;

export default function Checkout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.columnCard}>
        <Card className={classes.leftCard}>
          <CardContent>
            <EmailIcon color="primary" />
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Your email
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              EMAIL WILL GO HERE
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.leftCard}>
          <CardContent>
            <HomeIcon color="primary" />
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Youre address
            </Typography>
            <Typography variant="body2" component="p">
              ADDRESS WILL GO HERE
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.paymentCard}>
          <CardContent>
            <PaymentIcon color="primary" />
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Your payment method
            </Typography>

            <Typography variant="body2" component="p">
              PAYMENT METHOD WILL GO HERE
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary" size="large">
              Place Order
              <LockIcon />
            </Button>
          </CardActions>
        </Card>
      </div>
      <div className={classes.columnCard}>
        <div className={classes.rightCard}>
          <Card className={classes.topRight}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Your cart
              </Typography>
              <Typography variant="body2" component="p">
                CART ITEMS WILL GO HERE
              </Typography>
            </CardContent>
          </Card>

          <Card className={classes.bottomRight}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                SUBTOTAL:
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" component="p">
                ${placeHolderSubtotal}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
