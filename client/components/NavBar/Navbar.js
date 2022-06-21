import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAUser } from '../../store';
import {
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
  Typography,
  Avatar,
  Badge,
  Button,
} from '@material-ui/core';
import { ShoppingCart, Person, Settings } from '@material-ui/icons';
import Shoppingcart from '../CartCheckout/Cart';
import useStyles from './styles';

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.id);
  const { auth } = useSelector((state) => state);
  const classes = useStyles();

  const dispatch = useDispatch();

  const { cartReducer } = useSelector((state) => state);
  const [badge, setBadge] = useState(0);

  const userId = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (cartReducer) {
      setBadge(cartReducer.length);
    }
  }, [cartReducer]);

  useEffect(() => {
    const fetchUser = () => {
      if (!userId) return 'loading';
      dispatch(fetchAUser(userId.id)); //user with shopping id
    };
    fetchUser();
  }, [userId]);

  // const { cartReducer } = useSelector((state) => state);

  //remove home and logout when we have functioning components for those, theyre so ugly ;(
  return (
    <div>
      {/* <Typography variant="h3">Federation Store</Typography> */}
      <AppBar position='fixed' color='white'>
        <Toolbar>
          <Avatar
            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAMAAADQmBKKAAAAM1BMVEWJz/D///+EzfB+y+++4/bT7Pno9fz2+/77/f7X7vnv+P3I5/ff8ful2fOX1PLE5fez3/X3rO41AAADNUlEQVR4nO1a2XKrMAx1LLAJYIf//9pCkoLkhUCvRTxzdR760AlwrH2xUgKBQCAQCAQCgUAgEAgEAoHgP4Ne8W0mCxcA76bmMQyPZnIK4Jus5m+7xtjutqKzpnHqS5w0uLa/JWBaD9dT0qqxKTYv9JO6lpKGJikcJKbmSinBtCOdVUoOLqKj1f0znQXtNXoDd0A8FwpJN0fpLJjYZQQH1fWLgVlGejzHZzYkVhnBaT4zI0YZ6bS+rBnvbXsfTdraBzYZQcqe7eD8M8fOgdC7IcVpYpKRdgl9OMAReebl2vhXjklG0envPk7sWvtIsT0LncjhrUunKx2HTg7D1lMonnxiiJMLg9IgOPX+oSGwpL64iMKM0Xz4QuiRTXER0frns1EEMjKF6QQCuh/QQOAEhdMstSAb8U02QeSZslYUxETqMxr8tLRBU1DbBw/5kiLSxCCowrQz70aoM46IiSqtbNonJo3PqhXlioOT9lxmTYXfZr8ZsSVkCwZH6mPoxdp3twAdYkQPUtDPwKD3WmxBEZ+ZEX4QO5op52fkvahK1olSg6gUhtxJ/g1EMZvGYgN6YVMa0VmXfvkfQF5r/fr/MIOuItpE4bFsi1k1qTyQ94YFQEo32PqKWTVxshFpLGHST90gneE2pVjG1w/01i1Mp2rsUDckWD+KEcK+shlIVEMmdEPMrFg/VB+hnMpyNsSusrRRJ/qiF1C5xGTUObc3IZX3T9jdPhMYc26GPswTGHOpg55/Be5TeVJHPrkmReT4k2u2/CAffAN3SFzlR7ZAU/AI6JBgw1ag5UvYmVGX5cNXwu4U+Qo8CjUjnQMTZyjau+62QdoPve062w+eDkQY26DdRnH+Mijvl797DxVtFD+10mkQPRceyPxl2EAL3OIz/dPjGBqiSo9jzg+sgmKp/MDq5EgvCOHlR3onh55hg8QxqT48Flbgwv0n076jssH5kdWCWlYLcaXNtVrYWb7A7/IltazmWr7Ut56qb4FX34qzviVwfWvy+i4S1HfVQlV3GUXVd11HVXeh6UmpritfT0rLpbixmktxb041XRvcWNVzsVIgEAgEAoFAIBAIBAKBQCAQXIsfoRQc9rxAXeoAAAAASUVORK5CYII='
            component={Link}
            to='/'
          />
          <Typography
            style={{
              marginLeft: '10px',
              color: 'black',
              fontFamily: 'Bradley Hand',
              fontSize: '23px',
            }}
            component={Link}
            to='/allsnacks'
          >
            SHOP
          </Typography>
          <div style={{ flexGrow: 1 }} />
          <Typography
            variant='h4'
            style={{ fontFamily: 'Bradley Hand', color: 'black' }}
            component={Link}
            to='/'
            className={classes.storeName}
          >
            BullsEye Store
          </Typography>
          <div style={{ flexGrow: 1 }} />
          {isLoggedIn ? (
            <div>
              <IconButton component={Link} to='/myaccount'>
                <Person />
              </IconButton>

              <IconButton>
                <Shoppingcart />
              </IconButton>

              {auth.isAdmin ? (
                <Link to='/adminpage'>
                  <IconButton>
                    <Settings />
                  </IconButton>
                </Link>
              ) : (
                ''
              )}

              {/* The navbar will show these links after you log in */}
            </div>
          ) : (
            <div>
              <IconButton component={Link} to='/login'>
                <Person />
              </IconButton>

              <IconButton
                component={Link}
                to='/login'
                style={{ marginRight: '10px' }}
              >
                <Badge
                  badgeContent={badge}
                  showZero
                  classes={{ badge: classes.badge }}
                >
                  <ShoppingCart />
                </Badge>
              </IconButton>
              {/* The navbar will show these links before you log in */}
            </div>
          )}
        </Toolbar>
      </AppBar>
      <hr />
    </div>
  );
};

export default Navbar;
