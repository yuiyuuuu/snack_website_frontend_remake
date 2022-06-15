import React from "react";
import { useSelector } from "react-redux";
import useStyles from "./styles";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const iceCream =
  "data:image/jpeg;base64,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";

export const Home = () => {
  const username = useSelector((state) => state.auth.username);

  const classes = useStyles();
  return (
    <>
      <div className={classes.content}>
        <div className={classes.home}>
          <Typography
            variant="h1"
            className={classes.homeTitle}
            style={{ marginTop: "40px" }}
          >
            Tasty
          </Typography>
          <Typography variant="h1" className={classes.homeTitle}>
            snacks
          </Typography>
          <Typography variant="h1" className={classes.homeTitle}>
            delivered in
          </Typography>
          <Typography variant="h1" className={classes.homeTitle}>
            minutes.
          </Typography>
          <div className={classes.buttonDiv}>
            <Button
              className={classes.shopButton}
              component={Link}
              to="/allsnacks"
              style={{ fontSize: "20px" }}
            >
              Shop Now
            </Button>
          </div>
          <div />
        </div>
        <div className={classes.imageDiv}>
          <img src={iceCream} className={classes.media} />
        </div>
      </div>
    </>
  );
};

export default Home;
