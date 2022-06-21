import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { logout } from '../../store';
import { Tab, Tabs } from '@material-ui/core';
// import PersonIcon from '@material-ui/icons/Person';
import Profile from './Profile';
import Orders from './Orders';

const MyAccount = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

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
