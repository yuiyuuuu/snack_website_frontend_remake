import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { logout } from '../../store';
import { Link } from 'react-router-dom';

//form below is copied from https://codepen.io/shawnc8160/pen/xxRYOWg?editors=0010
//if you want to try anything, go to codepen and remove elements and see what is different
const MyAccount = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <>
      <div className={classes.content}>
        <a href='#' onClick={() => dispatch(logout())}>
          Logout
        </a>
      </div>
      <Link to='/profile'>Profile</Link>
    </>
  );
};

export default MyAccount;
