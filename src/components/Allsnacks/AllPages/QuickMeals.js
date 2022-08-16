import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../store/Snacks";
import BottomNav from "../../BottomNav/BottomNav";
import Navbar from "../../Navbar/Navbar";
import SnackView from "../SnackView/SnackView";

const QuickMeals = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products).filter(
    (item) => item.cat?.type === "Quick Meals"
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <div
        style={{
          width: "65%",
          display: "flex",
          flexDirection: "column",
          marginTop: "70px",
        }}
      >
        <a href='/bullseye'>
          <div style={{ textDecoration: "underline", cursor: "pointer" }}>
            Home
          </div>
        </a>
        <div
          style={{
            width: "100%",
            alignSelf: "center",
            marginTop: "50px",
            fontSize: "35px",
            fontWeight: "600",
            marginBottom: "20px",
          }}
        >
          Quick Meals
        </div>
        <div
          className='allsnacks-grid-container'
          style={{ marginBottom: "40px" }}
        >
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
      <BottomNav />
    </div>
  );
};

export default QuickMeals;
