import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSingleSnack } from "../../../store/singleSnack";
import { fetchProducts } from "../../../store/Snacks";
import SnackView from "../SnackView/SnackView";
import "./SingleSnack.css";
import Navbar from "../../Navbar/Navbar.jsx";

const left =
  "https://cdn-icons.flaticon.com/png/128/2985/premium/2985161.png?token=exp=1658385917~hmac=cbcc92465affce3974f896dee4fd8840";

const rightArrow =
  "https://cdn-icons.flaticon.com/png/128/2985/premium/2985179.png?token=exp=1658449648~hmac=9c05aeaa10fae14449737f88789c5727";

const SingleSnack = (props) => {
  const alsoViewedRef = useRef(null);
  const similarRef = useRef(null);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state); //al products
  const snackId = props.match.params.snackId;

  const [counter, setCounter] = useState(1);
  const [randomNum, setRandomNum] = useState(null);

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

  useEffect(() => {
    dispatch(fetchSingleSnack(snackId));
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    randomIntFromInterval(0, products.length - 10);
  }, [products]);

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

              <div className='atcbut'>Add to bag</div>
            </div>
          </div>
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
