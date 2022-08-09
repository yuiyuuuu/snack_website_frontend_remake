import React from "react";

const AdminProducts = ({ products }) => {
  console.log(products);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {products.map((product) => (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "10px",
          }}
        >
          <img
            src={product.photoURL}
            style={{ width: "80px", height: "80px" }}
          />
        </div>
      ))}
    </div>
  );
};

export default AdminProducts;
