import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    marginTop: 80,
    border: '2px solid red',
    height: '75vh',
    display: 'flex',
    flexDirection: 'row',
  },
  columnCard: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'pink',
  },
  singleCard: {
    height: '150px',
    width: 'auto',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Checkout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.columnCard}>
        <Card className={classes.singleCard}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Your email
            </Typography>
            <Typography variant="body2" component="p">
              Some information about the user
            </Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Your email
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardActions>
          <Button size="small">Checkout</Button>
        </CardActions>
      </Card>
    </div>
  );
}
