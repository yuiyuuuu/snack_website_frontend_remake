import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  ButtonGroup,
  Typography,
  CardMedia,
  Card,
  CardActions,
  CardContent,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleSnack } from "../../../store/singleSnack";
import { fetchAUser } from "../../../store";
import { addToCart } from "../../../store/cart";
// import GroupedButtons from './GroupedButtons';

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    height: "75vh",
  },
  rightCard: {
    borderRadius: "15px",
    padding: "10px",
    margin: "80px 5px 5px 5px",
    flex: "0 1 500px",
    // border: '2px solid blue',
  },
  leftCard: {
    borderRadius: "15px",
    padding: "10px",
    margin: "80px 5px 5px 5px",
    flex: "0 1 300px",
    // border: '2px red solid',
    width: 200,
    objectFit: "contain",
  },
  btnGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const SingleSnacks = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const [placeHolderStock, setPlaceHolderStock] = useState(10);
  const [counter, setCounter] = useState(placeHolderStock > 0 ? 1 : 0); //default to one, if there are no stock then default to 0, use ternary

  const snackId = props.match.params.snackId;
  const { singleSnack } = useSelector((state) => state);
  const { name, desc, price, quantity, photoURL } = singleSnack;

  useEffect(() => {
    const fetchUser = () => {
      if (!userId) return "loading";
      dispatch(fetchAUser(userId.id)); //user with shopping id
    };
    fetchUser();
  }, [userId]);

  useEffect(() => {
    dispatch(fetchSingleSnack(snackId));
  }, []);

  const atc = () => {
    const cartItem = {
      productId: singleSnack.id,
      quantity: singleSnack.quantity,
      shoppingSessionId: user.shopping_session.id,
    };
    dispatch(addToCart(cartItem));
  };
  return (
    <div className={classes.root}>
      <div className={classes.leftCard}>
        <CardMedia component='img' image={photoURL} />
      </div>
      <Card className={classes.rightCard}>
        <div>
          <Typography variant='h4' color='text.primary' component='div'>
            {name}
          </Typography>
          <Typography variant='h4' color='text.primary'>
            {price}
          </Typography>
          <Typography variant='h5' color='text.primary'>
            In Stock: {placeHolderStock}
          </Typography>
        </div>
        <hr></hr>
        <div>
          <div className={classes.btnGroup}>
            <div>
              <ButtonGroup
                color='primary'
                variant='contained'
                aria-label='outlined secondary button group'
              >
                <Button
                  disabled={counter <= 0}
                  onClick={() => {
                    setCounter(counter - 1);
                  }}
                >
                  -
                </Button>
                <Button disabled style={{ color: "black" }}>
                  {counter}
                </Button>
                <Button
                  disabled={counter >= placeHolderStock}
                  onClick={() => {
                    setCounter(counter + 1);
                  }}
                >
                  +
                </Button>
                {/* <Button onClick={() => setSnackCount(snackCount - 1)}>-</Button> */}
                {/* <Button
                  disabled={snackCount >= placeHolderStock}
                  onClick={() => {
                    setCounter(snackCount + 1);
                  }}
                >
                  +
                </Button>
                <Typography
                  style={{ alignContent: 'center' }}
                  variant="h6"
                  color="text.primary"
                >
                  {snackCount}
                </Typography> */}
                {/* <Button onClick={() => setSnackCount(snackCount + 1)}>+</Button> */}
              </ButtonGroup>
            </div>
            <div>
              <Button variant='contained' color='primary' onClick={() => atc()}>
                Add to Cart
              </Button>
            </div>
          </div>
        </div>

        <hr></hr>

        <div>
          <Typography variant='subtitle'>Description: {desc}</Typography>
        </div>
        <hr></hr>
        <div>HELLO</div>
      </Card>
    </div>
  );
};

export default SingleSnacks;
