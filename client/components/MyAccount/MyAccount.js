import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import { logout } from '../../store';
import { Link } from 'react-router-dom';
import { Tab, Tabs, Typography, Box } from '@material-ui/core';
// import PersonIcon from '@material-ui/icons/Person';
import Profile from './Profile';
import Orders from './Orders';

//form below is copied from https://codepen.io/shawnc8160/pen/xxRYOWg?editors=0010
//if you want to try anything, go to codepen and remove elements and see what is different
const MyAccount = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.auth);

  const [page, setPage] = React.useState(null);

  return (
    <div className={classes.content}>
      <Tabs orientation='vertical' value={false}>
        <Tab label='PROFILE' onClick={() => setPage(<Profile />)} />
        <Tab label='ORDERS' onClick={() => setPage(<Orders />)} />
        <Tab label='LOGOUT' onClick={() => dispatch(logout())} />
      </Tabs>
      {page}
    </div>
  );
};

export default MyAccount;
