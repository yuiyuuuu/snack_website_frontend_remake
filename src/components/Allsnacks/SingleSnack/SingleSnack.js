import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { clearState, fetchSingleSnack } from "../../../store/singleSnack";
import { fetchProducts } from "../../../store/Snacks";
import SnackView from "../SnackView/SnackView";
import "./SingleSnack.css";
import Navbar from "../../Navbar/Navbar.js";
import { addToCart, updateCart, fetchCart } from "../../../store/cart";
import { fetchAUser } from "../../../store";
import { useHistory } from "react-router-dom";

const left =
  "https://cdn.discordapp.com/attachments/515744333379665927/1002054686909665320/unknown.png";

const rightArrow =
  "https://cdn.discordapp.com/attachments/515744333379665927/1002054992049479730/unknown.png";

const SingleSnack = (props) => {
  const alsoViewedRef = useRef(null);
  const similarRef = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const { products } = useSelector((state) => state); //al products
  const user = useSelector((state) => state.user);
  const snackId = props.match.params.snackId;
  const userId = useSelector((state) => state.auth);
  const { shopping_session } = useSelector((state) => state.user);

  const [counter, setCounter] = useState(1); //cart qty
  const [randomNum, setRandomNum] = useState(null);

  const [showSuccess, setShowSuccess] = useState("none");

  const [loading, setLoading] = useState(true);

  const userCartArr =
    shopping_session !== undefined ? shopping_session.cart_items : []; //user cart items

  const snack = useSelector((state) => state.singleSnack);
  const filteredProducts = products.filter(
    (item) =>
      item.productCategoryId === snack.productCategoryId &&
      item.id !== snack.id &&
      item.display
  );

  function randomIntFromInterval(min, max) {
    if (products.length === 0) return;
    setRandomNum(Math.floor(Math.random() * (max - min + 1) + min));
  }

  const customerAlsoViewed = products
    .filter(
      (item) =>
        item.productCategoryId !== snack.productCategoryId && item.display
    )
    .slice(randomNum, randomNum + 10);

  const leftScroll = (reference) => {
    reference.current.scrollLeft += -200;
  };

  const rightScroll = (reference) => {
    reference.current.scrollLeft += 200;
  };

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

  const quantityInCart = checkCartQuantity();

  const atc = () => {
    if (!user.shopping_session?.id) return;
    try {
      if (quantityInCart > 0) {
        const cartItem = {
          productId: snackId,
          quantity: counter + quantityInCart,
          shoppingSessionId: user.shopping_session.id,
        };
        dispatch(updateCart(cartItem));
      } else {
        const cartItem = {
          productId: snackId,
          quantity: counter,
          shoppingSessionId: user.shopping_session.id,
        };
        dispatch(addToCart(cartItem));
      }
      setShowSuccess(null);
      dispatch(fetchAUser(userId.id));
    } catch (error) {
      console.error(error);
    }
    history.push("/bullseye");
  };

  useEffect(() => {
    const fetchUser = () => {
      if (!userId) return "loading";
      if (userId) {
        dispatch(fetchAUser(userId.id));
      }
    };

    fetchUser();
  }, [userId]); //might not need this. can get user directly from state.auth

  useEffect(() => {
    if (location.state) {
      setCounter(!location.state.quantity ? null : location.state.quantity);
      if (!counter) {
        return;
      }
      if (!user) return;
      atc();
    }
  }, [
    location.state,
    counter,
    !user.shopping_session?.id ? "" : user.shopping_session.id,
  ]);

  useEffect(() => {
    dispatch(clearState());
    setLoading(true);
    dispatch(fetchSingleSnack(snackId));
    dispatch(fetchProducts());
    setLoading(false);
  }, [snackId]);

  useEffect(() => {
    randomIntFromInterval(0, products.length - 10);
  }, [products]);

  if (loading) return "loading";
  if (!snack.display) {
    return (
      <div>
        <Navbar />
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          This item is not available
        </div>
      </div>
    );
  }
  return (
    <div className='single-snack-container'>
      <Navbar />
      <div className='single-snack-flex-container'>
        <div
          style={{
            height: "50px",
            display: "flex",
            flexDirection: "column-reverse",
            color: "black",
            marginBottom: "35px",
          }}
          className='goback-single'
        >
          <div style={{ cursor: "pointer" }}>
            <span
              style={{ textDecoration: "underline" }}
              onClick={() => history.push("/bullseye")}
            >
              Home
            </span>{" "}
            <span className='span-hi'>- </span>
            {snack.cat.type === "Salty" ||
            snack.cat.type === "Sweet" ||
            snack.cat.type === "Healthy" ||
            snack.cat.type === "Refrigerated/Frozen" ? (
              <span
                style={{ textDecoration: "underline" }}
                onClick={() => history.push("/allsnacks")}
              >
                Snacks
              </span>
            ) : snack.cat.type === "Grocery" ? (
              <span
                style={{ textDecoration: "underline" }}
                onClick={() => history.push("/allgrocery")}
              >
                Grocery
              </span>
            ) : snack.cat.type === "Drinks" ? (
              <span
                style={{ textDecoration: "underline" }}
                onClick={() => history.push("/alldrinks")}
              >
                Drinks
              </span>
            ) : snack.cat.type === "Alcohol" ? (
              <span
                style={{ textDecoration: "underline" }}
                onClick={() => history.push("/allalcohol")}
              >
                Alcohol
              </span>
            ) : snack.cat.type === "Cleaning" ? (
              <span
                style={{ textDecoration: "underline" }}
                onClick={() => history.push("/allcleaning")}
              >
                Cleaning
              </span>
            ) : null}
          </div>
        </div>

        <div className='single-snack-product-container'>
          <div className='product-image-div'>
            <img src={snack.photoURL} className='product-image' />
          </div>
          <div className='product-description-div'>
            <div className='product-name'>{snack.name}</div>
            <div
              style={{ fontWeight: "600", marginTop: "10px", fontSize: "18px" }}
            >
              ${snack.price}
            </div>
            <div style={{ marginTop: "10px" }}>{snack.desc}</div>
            <div style={{ marginTop: "15px" }}>
              {snack.quantity !== 0 ? (
                "In stock: " + snack.quantity
              ) : (
                <span style={{ color: "red" }}>Out of stock</span>
              )}
            </div>
            <div style={{ flexGrow: 1 }} />

            <div className='atc-quantity-div'>
              <div
                className='add-sub'
                style={{
                  pointerEvents:
                    counter === 1 || snack.quantity === 0 ? "none" : "auto",
                }}
                onClick={() => setCounter(counter - 1)}
              >
                -
              </div>
              <div>{counter}</div>
              <div
                className='add-sub'
                style={{
                  fontSize: "22px",
                  pointerEvents:
                    counter === snack.quantity || snack.quantity === 0
                      ? "none"
                      : "",
                }}
                onClick={() => setCounter(counter + 1)}
              >
                +
              </div>

              <div
                className='atcbut'
                onClick={() =>
                  !!userId.id
                    ? atc()
                    : history.push({
                        pathname: "/login",
                        state: { from: snack, quantity: counter },
                      })
                }
                style={{
                  pointerEvents:
                    loading || snack.quantity === 0 ? "none" : "auto",
                  backgroundColor: snack.quantity === 0 ? "gainsboro" : "red",
                }}
              >
                Add to bag
              </div>
            </div>
          </div>
        </div>

        <div style={{ alignSelf: "center", display: showSuccess }}>
          Success! Added to your{" "}
          <span style={{ textDecoration: "underline", cursor: "pointer" }}>
            <a href='/cart'>bag</a>
          </span>
        </div>

        <div className='title-arrow-container'>
          <div className='similar-products-title'>Similar Products</div>
          <div style={{ flexGrow: 1 }} />
          <div className='arrow-circle' style={{ marginRight: "10px" }}>
            <img src={left} alt='leftbutton' className='left-right-but' />
          </div>
          <div className='arrow-circle'>
            <img
              src={rightArrow}
              alt='rightbutton'
              className='left-right-but'
            />
          </div>
        </div>
        <div className='container-similar-products snap-single-product'>
          {filteredProducts.map((item) => (
            <SnackView
              key={item.name}
              photoUrl={item.photoURL}
              title={item.name}
              description={item.desc}
              price={item.price}
              snack={item}
            />
          ))}
        </div>

        <div className='title-arrow-container' style={{ marginTop: "12px" }}>
          <div className='similar-products-title'>Customers also viewed</div>
          <div style={{ flexGrow: 1 }} />
          <div
            className='arrow-circle'
            style={{ marginRight: "10px" }}
            onClick={() => leftScroll(alsoViewedRef)}
          >
            <img src={left} alt='leftbutton' className='left-right-but' />
          </div>
          <div
            className='arrow-circle'
            onClick={() => rightScroll(alsoViewedRef)}
          >
            <img
              src={rightArrow}
              alt='rightbutton'
              className='left-right-but'
            />
          </div>
        </div>
        <div
          className='container-similar-products snap-single-product'
          style={{ marginTop: "12px" }}
          ref={alsoViewedRef}
        >
          {customerAlsoViewed.map((item) => (
            <SnackView
              key={item.name}
              photoUrl={item.photoURL}
              title={item.name}
              description={item.desc}
              price={item.price}
              snack={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleSnack;
