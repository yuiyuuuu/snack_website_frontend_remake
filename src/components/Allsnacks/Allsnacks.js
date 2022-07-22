import React, { useEffect, useState } from "react";
import "./Allsnacks.css";
import productData from "../../../script/productData";
import SnackView from "./SnackView/SnackView";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/Snacks";
const left =
  "https://cdn-icons.flaticon.com/png/128/2985/premium/2985161.png?token=exp=1658385917~hmac=cbcc92465affce3974f896dee4fd8840";

const rightArrow =
  "https://cdn-icons.flaticon.com/png/128/2985/premium/2985179.png?token=exp=1658449648~hmac=9c05aeaa10fae14449737f88789c5727";
//for filtering, im thinking of a checkbox where you can select as many filters as you want
//if user selects a filter, it gets pushed to an array
//only render sections that is included in that array
//if array is empty aka no filter, then render everything

const Allsnacks = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state);
  const salty = products.filter((item) => item.productCategoryId === 1);
  const sweet = products.filter((item) => item.productCategoryId === 3);
  const healthy = products.filter((item) => item.productCategoryId === 4);
  const frozen = products.filter((item) => item.productCategoryId === 2);
  console.log(frozen);

  const right = () => {
    counter = counter + 5;
    counter2 = counter2 + 5;
  };

  const SnackCards = salty.map((item) => (
    <SnackView
      key={item.name}
      photoUrl={item.photoURL}
      title={item.name}
      description={item.desc}
      price={item.price}
      snack={item}
    />
  ));

  const SweetSnacks = sweet.map((item) => (
    <SnackView
      key={item.name}
      photoUrl={item.photoURL}
      title={item.name}
      description={item.desc}
      price={item.price}
      snack={item}
    />
  ));

  const HealthySnacks = healthy.map((item) => (
    <SnackView
      key={item.name}
      photoUrl={item.photoURL}
      title={item.name}
      description={item.desc}
      price={item.price}
      snack={item}
    />
  ));

  const FrozenSnacks = frozen.map((item) => (
    <SnackView
      key={item.name}
      photoUrl={item.photoURL}
      title={item.name}
      description={item.desc}
      price={item.price}
      snack={item}
    />
  ));

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className='parent'>
      <div className='filters'>
        <div style={{ fontSize: 20, marginBottom: "20px" }}>Filters</div>
        <div>
          <div className='checkbox-div'>
            <input type='checkbox' className='checkbox-input' />
            Sweet
          </div>
          <div className='checkbox-div'>
            <input type='checkbox' className='checkbox-input' />
            Salty
          </div>
          <div className='checkbox-div'>
            <input type='checkbox' className='checkbox-input' />
            Healthy
          </div>
          <div className='checkbox-div'>
            <input type='checkbox' className='checkbox-input' />
            Frozen Snacks
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className='snack-title'>Sweet Snacks</div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className='next-div'>
            <img src={left} className='leftandright' alt='lefticon' />
          </div>
          <div className='container'>{SweetSnacks}</div>
          <div className='next-div' onClick={() => right()}>
            <img src={rightArrow} alt='righticon' className='leftandright' />
          </div>
        </div>

        <div className='snack-title'>Healthy Snacks</div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className='next-div'>
            <img src={left} className='leftandright' alt='lefticon' />
          </div>
          <div className='container'>{HealthySnacks}</div>
          <div className='next-div' onClick={() => right()}>
            <img src={rightArrow} alt='righticon' className='leftandright' />
          </div>
        </div>

        <div className='snack-title'>Salty Snacks</div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className='next-div'>
            <img src={left} className='leftandright' alt='lefticon' />
          </div>
          <div className='container'>{SnackCards}</div>
          <div className='next-div' onClick={() => right()}>
            <img src={rightArrow} alt='righticon' className='leftandright' />
          </div>
        </div>

        <div className='snack-title'>Frozen Snacks</div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className='next-div'>
            <img src={left} className='leftandright' alt='lefticon' />
          </div>
          <div className='container'>{FrozenSnacks}</div>
          <div className='next-div' onClick={() => right()}>
            <img src={rightArrow} alt='righticon' className='leftandright' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allsnacks;
