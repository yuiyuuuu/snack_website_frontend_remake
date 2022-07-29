import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSingleSnack } from "../../../store/singleSnack";
import { fetchProducts } from "../../../store/Snacks";
import SnackView from "../SnackView/SnackView";
import "./SingleSnack.css";
import Navbar from "../../Navbar/Navbar";
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
      item.productCategoryId === snack.productCategoryId && item.id !== snack.id
  );

  function randomIntFromInterval(min, max) {
    if (products.length === 0) return;
    setRandomNum(Math.floor(Math.random() * (max - min + 1) + min));
  }

  const customerAlsoViewed = products
    .filter((item) => item.productCategoryId !== snack.productCategoryId)
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
    try {
      if (quantityInCart > 0) {
        console.log("COUNTTTTER", counter);
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
      console.log("SUCCCCCESSSS");
    } catch (error) {
      console.error(error);
    }
    history.push("/allsnacks");
  };

  // console.log(shopping_session ? shopping_session.cart_items : null);
  console.log(counter);

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
    dispatch(fetchSingleSnack(snackId));
    dispatch(fetchProducts());
    setLoading(false);
  }, []);

  useEffect(() => {
    randomIntFromInterval(0, products.length - 10);
  }, [products]);

  if (loading) return "loading";
  return (
    <div className='single-snack-container'>
      <Navbar />
      <div className='single-snack-flex-container'>
        <div
          style={{
            height: "50px",
            display: "flex",
            flexDirection: "column-reverse",
            textDecoration: "underline",
            color: "black",
            marginBottom: "18px",
            width: "70px",
          }}
          className='goback-single'
        >
          <a href='/allsnacks'>Go back</a>
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
            <div style={{ flexGrow: 1 }} />

            <div className='atc-quantity-div'>
              <div
                className='add-sub'
                style={{ pointerEvents: counter === 1 ? "none" : "auto" }}
                onClick={() => setCounter(counter - 1)}
              >
                -
              </div>
              <div>{counter}</div>
              <div
                className='add-sub'
                style={{ fontSize: "22px" }}
                onClick={() => setCounter(counter + 1)}
              >
                +
              </div>

              <div
                className='atcbut'
                onClick={() => atc()}
                style={{ pointerEvents: loading ? "none" : "auto" }}
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
