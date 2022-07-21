import React from "react";
import "./Allsnacks.css";
import productData from "../../../script/productData";
import SnackView from "./SnackView/SnackView";
const left =
  "https://cdn-icons.flaticon.com/png/128/2985/premium/2985161.png?token=exp=1658385917~hmac=cbcc92465affce3974f896dee4fd8840";

const right =
  "https://cdn-icons.flaticon.com/png/128/2985/premium/2985179.png?token=exp=1658386163~hmac=9595b68f5075fd962c431633207d437b";
//for filtering, im thinking of a checkbox where you can select as many filters as you want
//if user selects a filter, it gets pushed to an array
//only render sections that is included in that array
//if array is empty aka no filter, then render everything

const Allsnacks = () => {
  const counter = 0;
  const counter2 = counter + 5;
  const tensnacks = productData.slice(counter, counter2);

  const right = () => {
    counter = counter + 5;
    counter2 = counter2 + 5;
  };

  const SnackCards = tensnacks.map((item) => (
    <SnackView
      key={item.name}
      photoUrl={item.photoURL}
      title={item.name}
      description={item.desc}
      price={item.price}
    />
  ));

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
            Ice Cream
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className='snack-title'>Sweet Snacks</div>
        <div className='container'>
          <div className='next-div'>
            <img src={left} className='leftandright' alt='lefticon' />
          </div>
          {SnackCards}
          <div className='next-div'>
            <img src={right} alt='righticon' className='leftandright' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allsnacks;
