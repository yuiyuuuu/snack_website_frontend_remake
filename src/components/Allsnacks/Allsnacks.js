import React from "react";
import productData from "../../../script/productData";

const Allsnacks = () => {
  const snackCards = productData.map(item => (
    (
      <SnackView
        key = {item.name}
        photoUrl = {item.photoURL}
        title = {item.name}
        description = {item.desc}
        price = {item.price}
      />
    )
  ))
  return (
    <div>
      Allsnacks

      


    </div>
  )
};

export default Allsnacks;
