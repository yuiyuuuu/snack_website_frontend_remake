import React, { useEffect } from "react";
import useStyles from "./styles";
import { Container, Typography, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import fetchProducts from "../../../store/products";
import SingleSnackComponent from "../SingleSnackComponent/SingleSnackComponent";

const AllSnacks = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, []);

  return (
    <>
      <main className={classes.root}>
        <div className={classes.toolbar} />
        <Grid container justifyContent="flex-start" spacing={4}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <SingleSnackComponent />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <SingleSnackComponent />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <SingleSnackComponent />
          </Grid>
        </Grid>
      </main>
    </>
  );
};

export default AllSnacks;
