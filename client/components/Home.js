import React from 'react';
import { useSelector } from 'react-redux';

export const Home = () => {
  const username = useSelector((state) => state.auth.username);

  return (
    <div>
      <h3 style={{ fontSize: '100px' }}>Welcome, {username}</h3>
    </div>
  );
};

export default Home;
