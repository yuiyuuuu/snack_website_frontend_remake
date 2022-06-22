import React from 'react';
import { useSelector } from 'react-redux';
import useStyles from './styles';
import { Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

// const iceCream =
//   'https://img.freepik.com/free-vector/realistic-ice-cream-collection_52683-64217.jpg?w=2000';
const iceCream =
  'https://images.unsplash.com/photo-1593558159516-d0be2a960c52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80';

const iceCream2 =
  'https://images.unsplash.com/photo-1629385742818-32909d7b45a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=500';
const chips =
  'https://www.lays.com/sites/lays.com/files/2020-11/lays-Classic-small.jpg';
export const Home = () => {
  const email = useSelector((state) => state.auth.email);

  //was trying to replicate this https://gopuff.com/go
  //css styling names- m + any number = main + number. These are usually container divs
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.root}>
        <div className={classes.m1}>
          <div className={classes.textAndButtons}>
            <div className={classes.textLeft}>
              <Typography
                variant='h1'
                className={classes.homeTitle}
                style={{ marginTop: '40px' }}
              >
                Tasty
              </Typography>
              <Typography variant='h1' className={classes.homeTitle}>
                snacks
              </Typography>
              <Typography variant='h1' className={classes.homeTitle}>
                delivered in
              </Typography>
              <Typography variant='h1' className={classes.homeTitle}>
                minutes.
              </Typography>
              <Typography variant='h1' className={classes.homeTitle}>
                Right
              </Typography>
              <Typography variant='h1' className={classes.homeTitle}>
                to your
              </Typography>
              <Typography variant='h1' className={classes.homeTitle}>
                door.
              </Typography>
            </div>

            <div className={classes.buttonDiv}>
              <Button
                className={classes.shopButton}
                component={Link}
                to='/allsnacks'
                style={{ fontSize: '20px' }}
              >
                Shop Now
              </Button>
            </div>
          </div>
        </div>
        <div className={classes.imageDiv}>
          <img src={iceCream} className={classes.media} />
          <div className={classes.bottomTwoImg}>
            <img src={chips} className={classes.media2} />
            <img src={iceCream2} className={classes.media2} />
          </div>
        </div>
      </div>
      <div className={classes.root2}>
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div className={classes.m2Text}>
              <img src='https://gopuff.com/go/Value-Prop-1.svg' />
              <Typography variant='h4' className={classes.title}>
                Hundreds of Items
              </Typography>
              <Typography variant='body1'>
                From your favorite salty chips &amp; crackers to refreshing
                electrolyte drinks and sodas and more
              </Typography>
            </div>
            <div className={classes.m2Text}>
              <img src='https://gopuff.com/go/Value-Prop-2.svg' />
              <Typography variant='h4' className={classes.title}>
                Delivered Fast
              </Typography>
              <Typography variant='body1'>
                With our fulfillment centers all around the country means we get
                your order to your door in as little as 30 minutes.
              </Typography>
            </div>
            <div className={classes.m2Text}>
              <img src='https://gopuff.com/go/Value-Prop-3.svg' />
              <Typography variant='h4' className={classes.title}>
                Free Delivery
              </Typography>
              <Typography variant='body1'>
                Everything you need... fast and fresh delivered right to your
                door at no extra cost.
              </Typography>
            </div>
          </div>
          <Typography
            style={{
              fontColor: 'gray',
              fontSize: '.7em',
              color: 'gainsboro',
            }}
            variant='caption text'
          >
            *Not guarnteed;average delivery time.
          </Typography>
        </div>
      </div>
      <div className={classes.root3}>
        <Typography variant='h2' style={{ fontWeight: 'bolder' }}>
          Browse a Popular Category
        </Typography>
        <Typography
          variant='h6'
          style={{
            fontWeight: 'bolder',
            color: 'deepskyblue',
            transition: {
              transitionProperty: 'border-bottom',
              transitionDuration: '225ms',
              transitionTimingFunction: 'ease-in-out',
              transitionDelay: '0ms',
            },
            fontSize: '1.2em',
          }}
          component={Link}
          to='/allsnacks'
        >
          Start Shopping{' '}
          <svg
            fill='none'
            viewBox='0 0 20 20'
            height='20'
            width='20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              xmlns='http://www.w3.org/2000/svg'
              d='M3.125 10H16.875'
              stroke='#00A4FF'
              strokeWidth='2'
              strokeLinejoin='round'
            ></path>
            <path
              xmlns='http://www.w3.org/2000/svg'
              d='M11.25 4.375L16.875 10L11.25 15.625'
              stroke='#00A4FF'
              strokeWidth='2'
              strokeLinejoin='round'
            ></path>
          </svg>
        </Typography>
      </div>
    </div>
  );
};

export default Home;
