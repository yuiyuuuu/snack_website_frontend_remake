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
import { useHistory } from "react-router-dom";
import { fetchSingleSnack } from "../../../store/singleSnack";
import { fetchAUser } from "../../../store";
import { addToCart, updateCart, fetchCart } from "../../../store/cart";
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
  const history = useHistory();

  const userId = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const { singleSnack } = useSelector((state) => state);
  const { shopping_session } = useSelector((state) => state.user);
  const { cartReducer } = useSelector((state) => state);
  const { name, desc, price, quantity, photoURL } = singleSnack;
  const snackId = props.match.params.snackId;

  // CART QUANTITY OF ITEM
  const [counter, setCounter] = useState(0);

  // ARRAY OF CART ITEMS FOR USER
  const userCartArr =
    shopping_session !== undefined ? shopping_session.cart_items : [];

  // CHECK IF ITEM IS IN CART. IF IT IS, RETURN CART QTY. IF NOT, RETURN 0
  const checkCartQuantity = () => {
    let amount = 0;
    for (let i = 0; i < userCartArr.length; i++) {
      const snackInCart = userCartArr[i];
      if (parseInt(snackId) === snackInCart.productId) {
        return snackInCart.quantity;
      }
    }
    return amount;
  };

  // QUANTITY IN CART AND BUTTON #
  const quantityInCart = checkCartQuantity();

  useEffect(() => {
    if (userId) {
      dispatch(fetchCart(userId.id));
    }
  }, [userId.id]);

  useEffect(() => {
    setCounter(quantityInCart);
  }, [quantityInCart]);

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
      quantity: counter,
      shoppingSessionId: user.shopping_session.id,
    };
    if (quantityInCart > 0) {
      dispatch(updateCart(cartItem));
    } else {
      dispatch(addToCart(cartItem));
    }
    history.push("/allsnacks");
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
            In Stock: {quantity}
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
                  disabled={counter >= 100}
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
              <Button
                // needs to refresh page in future
                variant='contained'
                color='primary'
                onClick={() => {
                  if (counter > 0) atc();
                }}
              >
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
