import React from "react";
import useStyles from "./styles";
import { Typography } from "@material-ui/core";

const ManagePage = () => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.content}>MANAGE PAGE</Typography>
    </>
  );
};

export default ManagePage;
