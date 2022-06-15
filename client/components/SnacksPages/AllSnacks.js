import React from "react";
import useStyles from "./stylesAllSnacks";
import { Typography } from "@material-ui/core";

const AllSnacks = () => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.content} variant="h2">
        ALLSNACKS
      </Typography>
    </>
  );
};

export default AllSnacks;
