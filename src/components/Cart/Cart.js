import React, { useEffect, useRef, useState } from "react";
import "./Cart.css";
import SnackView from "../Allsnacks/SnackView/SnackView";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/Snacks";
import { Link } from "react-router-dom";
import { fetchAUser } from "../../store";
import { fetchCart } from "../../store/cart";

import { useHistory } from "react-router-dom";
import { updateCart, deleteCartItem } from "../../store/cart";

const left =
  "https://cdn.discordapp.com/attachments/515744333379665927/1002054686909665320/unknown.png";

const rightArrow =
  "https://cdn.discordapp.com/attachments/515744333379665927/1002054992049479730/unknown.png";

const Cart = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const wantRef = useRef(null);
  const newRef = useRef(null);

  const { products } = useSelector((state) => state);
  const { shopping_session } = useSelector((state) => state.user);
  const userId = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const [total, setTotal] = useState("");
  const cart = useSelector((state) => state.cartReducer);

  const [loading, setLoading] = useState(true);

  const leftScroll = (reference) => {
    reference.current.scrollLeft += -200;
  };

  const rightScroll = (reference) => {
    reference.current.scrollLeft += 200;
  };

  const calculatePrice = () => {
    if (!shopping_session) return;
    let totalPrice = 0;
    cart.forEach((item) => {
      const totalOne = item.product.price * item.quantity;
      totalPrice += totalOne;
    });
    setTotal(totalPrice);
  };

  const increment = (item) => {
    console.log(item);
    const itemCart = {
      productId: item.product.id,
      quantity: item.quantity + 1,
      shoppingSessionId: user.shopping_session.id,
    };

    dispatch(updateCart(itemCart));
  };

  const decrement = (item) => {
    if (item.quantity === 1) {
      dispatch(deleteCartItem(item.id));
    } else {
      const itemCart = {
        productId: item.product.id,
        quantity: item.quantity - 1,
        shoppingSessionId: user.shopping_session.id,
      };

      dispatch(updateCart(itemCart));
    }
  };

  const sorting = (id, id2) => {
    if (id > id2) {
      return 1;
    } else {
      return -1;
    }
  };

  useEffect(() => {
    calculatePrice();
  }, [cart]);

  useEffect(() => {
    const fetchUser = () => {
      if (!userId) return "loading";
      if (userId) {
        dispatch(fetchAUser(userId.id));
      }
      dispatch(fetchCart(userId.id));
    };

    fetchUser();
    setLoading(false);
  }, [userId]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (loading) return "loading";
  return (
    <div>
      <div className='topnav-cart'>
        <div className='back-but-cart' onClick={() => history.goBack()}>
          &#8592; Back
        </div>
        <div
          style={{
            position: "absolute",
            marginLeft: "42%",
            marginRight: "50%",
          }}
        >
          <a href='/allsnacks'>
            <img
              src={
                "https://cdn.discordapp.com/attachments/779278654714675232/1001644818612637726/cover.png"
              }
              style={{ height: "85px" }}
            />
          </a>
        </div>
        <div
          style={{
            position: "absolute",
            top: "100%",
            backgroundColor: "gainsboro",
            width: "100%",
            height: ".5px",
          }}
        />
      </div>

      <div className='parent-cart'>
        <div className='container-cart'>
          {cart.length !== 0 ? (
            <div className='middle-container'>
              <div
                style={{
                  width: "80%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    fontSize: "35px",
                    fontWeight: "600",
                    fontFamily: "arial black",
                  }}
                >
                  My bag
                </div>

                {cart.map((item) => (
                  <div className='cart-item-container' key={item.product.id}>
                    <div>
                      <img
                        src={item.product.photoURL}
                        alt='cartitem'
                        className='cart-item-image'
                      />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div style={{ fontSize: "11px", fontWeight: "600" }}>
                        {item.product.name}
                      </div>
                      <div
                        style={{
                          fontSize: "10px",
                          marginTop: "4px",
                          color: "darkgray",
                        }}
                      >
                        ${item.product.price}
                      </div>
                    </div>
                    <div style={{ flexGrow: 1 }} />
                    <div className='cart-addbut'>
                      <div
                        className='cart-plus'
                        style={{ marginLeft: "3px", backgroundColor: "white" }}
                        onClick={() => decrement(item)}
                      >
                        -
                      </div>

                      <div>{item.quantity}</div>

                      <div
                        className='cart-plus'
                        style={{ marginRight: "3px", backgroundColor: "aqua" }}
                        onClick={() => increment(item)}
                      >
                        +
                      </div>
                    </div>
                  </div>
                ))}

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: "13px",
                  }}
                >
                  <div style={{ fontWeight: "600" }}>Order subtotal:</div>
                  <div style={{ flexGrow: 1 }} />
                  <div style={{ fontWeight: "600" }}>
                    $
                    {Math.round(total * 100) % 10 === 0 && total !== 0
                      ? Math.round(total * 100) / 100 + "0"
                      : Math.round(total * 100) / 100}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>You have no items in your cart</div>
          )}
          <div className='title-arrow-container-cart'>
            <div
              style={{
                width: "auto",
                alignSelf: "start",
                fontSize: "25px",
                fontWeight: "600",
                fontFamily: "arial black",
              }}
            >
              Did you also want?
            </div>

            <div style={{ flexGrow: 1 }} />
            <div
              className='arrow-circle'
              style={{ marginRight: "10px" }}
              onClick={() => leftScroll(wantRef)}
            >
              <img src={left} alt='leftbutton' className='left-right-but' />
            </div>
            <div className='arrow-circle' onClick={() => rightScroll(wantRef)}>
              <img
                src={rightArrow}
                alt='rightbutton'
                className='left-right-but'
              />
            </div>
          </div>
          <div className='cart-want-container' ref={wantRef}>
            {products.map((item) => (
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

          <div className='title-arrow-container-cart'>
            <div
              style={{
                width: "auto",
                alignSelf: "start",
                fontSize: "25px",
                fontWeight: "600",
                fontFamily: "arial black",
              }}
            >
              New on bullseye
            </div>

            <div style={{ flexGrow: 1 }} />
            <div
              className='arrow-circle'
              style={{ marginRight: "10px" }}
              onClick={() => leftScroll(wantRef)}
            >
              <img src={left} alt='leftbutton' className='left-right-but' />
            </div>
            <div className='arrow-circle' onClick={() => rightScroll(newRef)}>
              <img
                src={rightArrow}
                alt='rightbutton'
                className='left-right-but'
              />
            </div>
          </div>

          <div className='cart-want-container' ref={newRef}>
            {products.map((item) => (
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
      <div className='bottom-div-cart'>
        <div
          style={{
            backgroundColor: "gainsboro",
            height: ".5px",
            width: "100%",
          }}
        />

        <a href='/checkout' className='cart-nodecorations'>
          <div className='checkout-but-cart'>Checkout</div>
        </a>
      </div>
    </div>
  );
};

export default Cart;
