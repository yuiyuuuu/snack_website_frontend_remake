import React from "react";
import { useSelector } from "react-redux";
import useStyles from "./styles";

export const Home = () => {
  const username = useSelector((state) => state.auth.username);

  const classes = useStyles();
  return (
    <div className={classes.content}>
      <h3>Welcome, {username || "guest"}</h3>
    </div>
  );
};

export default Home;
