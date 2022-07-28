import React, { useEffect, useRef } from "react";
import "./Cart.css";
import SnackView from "../Allsnacks/SnackView/SnackView";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/Snacks";
import logo from "../../../assets/bullseye-logo/cover.png";
import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom";

const left =
  "https://cdn-icons.flaticon.com/png/128/2985/premium/2985161.png?token=exp=1658385917~hmac=cbcc92465affce3974f896dee4fd8840";

const rightArrow =
  "https://cdn-icons.flaticon.com/png/128/2985/premium/2985179.png?token=exp=1658449648~hmac=9c05aeaa10fae14449737f88789c5727";

const Cart = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const wantRef = useRef(null);
  const { products } = useSelector((state) => state);

  const leftScroll = (reference) => {
    reference.current.scrollLeft += -200;
  };

  const rightScroll = (reference) => {
    reference.current.scrollLeft += 200;
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

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
          <div className='middle-container'>
            <div
              style={{ width: "80%", display: "flex", flexDirection: "column" }}
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
              <div className='cart-item-container'>
                <div>
                  <img
                    src='https://target.scene7.com/is/image/Target/GUEST_681ec0d2-c746-43ad-bfc0-71ec4fc922fc?wid=325&hei=325&qlt=80&fmt=pjpeg'
                    alt='cartitem'
                    className='cart-item-image'
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ fontSize: "11px", fontWeight: "600" }}>
                    Lays BBQ CHIPS NAME
                  </div>
                  <div
                    style={{
                      fontSize: "10px",
                      marginTop: "4px",
                      color: "darkgray",
                    }}
                  >
                    $11.99
                  </div>
                </div>
                <div style={{ flexGrow: 1 }} />
                <div className='cart-addbut'>
                  <div
                    className='cart-plus'
                    style={{ marginLeft: "3px", backgroundColor: "white" }}
                  >
                    -
                  </div>

                  <div>12</div>

                  <div
                    className='cart-plus'
                    style={{ marginRight: "3px", backgroundColor: "aqua" }}
                  >
                    +
                  </div>
                </div>
              </div>

              <div className='cart-item-container'>
                <div>
                  <img
                    src='https://target.scene7.com/is/image/Target/GUEST_681ec0d2-c746-43ad-bfc0-71ec4fc922fc?wid=325&hei=325&qlt=80&fmt=pjpeg'
                    alt='cartitem'
                    className='cart-item-image'
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ fontSize: "11px", fontWeight: "600" }}>
                    Lays BBQ CHIPS NAME
                  </div>
                  <div
                    style={{
                      fontSize: "10px",
                      marginTop: "4px",
                      color: "darkgray",
                    }}
                  >
                    $11.99
                  </div>
                </div>
                <div style={{ flexGrow: 1 }} />
                <div className='cart-addbut'>
                  <div
                    className='cart-plus'
                    style={{ marginLeft: "3px", backgroundColor: "white" }}
                  >
                    -
                  </div>

                  <div>12</div>

                  <div
                    className='cart-plus'
                    style={{ marginRight: "3px", backgroundColor: "aqua" }}
                  >
                    +
                  </div>
                </div>
              </div>

              <div className='cart-item-container'>
                <div>
                  <img
                    src='https://target.scene7.com/is/image/Target/GUEST_681ec0d2-c746-43ad-bfc0-71ec4fc922fc?wid=325&hei=325&qlt=80&fmt=pjpeg'
                    alt='cartitem'
                    className='cart-item-image'
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ fontSize: "11px", fontWeight: "600" }}>
                    Lays BBQ CHIPS NAME
                  </div>
                  <div
                    style={{
                      fontSize: "10px",
                      marginTop: "4px",
                      color: "darkgray",
                    }}
                  >
                    $11.99
                  </div>
                </div>
                <div style={{ flexGrow: 1 }} />
                <div className='cart-addbut'>
                  <div
                    className='cart-plus'
                    style={{ marginLeft: "3px", backgroundColor: "white" }}
                  >
                    -
                  </div>

                  <div>12</div>

                  <div
                    className='cart-plus'
                    style={{
                      marginRight: "3px",
                      backgroundColor: "aqua",
                    }}
                  >
                    +
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "13px",
                }}
              >
                <div style={{ fontWeight: "600" }}>Order subtotal:</div>
                <div style={{ flexGrow: 1 }} />
                <div style={{ fontWeight: "600" }}>$11.99</div>
              </div>
            </div>
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
