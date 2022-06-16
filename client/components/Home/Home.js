import React from "react";
import { useSelector } from "react-redux";
import useStyles from "./styles";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const iceCream =
  "data:image/jpeg;base64,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";

const chips =
  "data:image/jpeg;base64,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";
export const Home = () => {
  const email = useSelector((state) => state.auth.email);

  //was trying to replicate this https://gopuff.com/go
  //css styling names- m + any number = main + number. These are usually container divs
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.root}>
        <div className={classes.m1}>
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
          <Typography variant="h1" className={classes.homeTitle}>
            Right
          </Typography>
          <Typography variant="h1" className={classes.homeTitle}>
            to your
          </Typography>
          <Typography variant="h1" className={classes.homeTitle}>
            door.
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
          <div className={classes.bottomTwoImg}>
            <img src={chips} className={classes.media2} />
            <img src={chips} className={classes.media2} />
          </div>
        </div>
      </div>
      <div className={classes.root2}>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div className={classes.m2Text}>
              <img src="https://gopuff.com/go/Value-Prop-1.svg" />
              <Typography variant="h4" className={classes.title}>
                Hundreds of Items
              </Typography>
              <Typography variant="body1">
                From your favorite salty chips &amp; crackers to refreshing
                electrolyte drinks and sodas and more
              </Typography>
            </div>
            <div className={classes.m2Text}>
              <img src="https://gopuff.com/go/Value-Prop-2.svg" />
              <Typography variant="h4" className={classes.title}>
                Delivered Fast
              </Typography>
              <Typography variant="body1">
                With our fulfillment centers all around the country means we get
                your order to your door in as little as 30 minutes.
              </Typography>
            </div>
            <div className={classes.m2Text}>
              <img src="https://gopuff.com/go/Value-Prop-3.svg" />
              <Typography variant="h4" className={classes.title}>
                Free Delivery
              </Typography>
              <Typography variant="body1">
                Everything you need... fast and fresh delivered right to your
                door at no extra cost.
              </Typography>
            </div>
          </div>
          <Typography
            style={{
              fontColor: "gray",
              fontSize: ".7em",
              color: "gainsboro",
            }}
            variant="caption text"
          >
            *Not guarnteed;average delivery time.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Home;
