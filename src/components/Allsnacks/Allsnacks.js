import React, { useEffect, useState, useRef } from "react";
import "./Allsnacks.css";
import SnackView from "./SnackView/SnackView";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/Snacks";
import Navbar from "../Navbar/Navbar.js";
import BottomNav from "../BottomNav/BottomNav";
import FilterIcons from "./FilterIcons";
const left =
  "https://cdn.discordapp.com/attachments/515744333379665927/1002054686909665320/unknown.png";

const rightArrow =
  "https://cdn.discordapp.com/attachments/515744333379665927/1002054992049479730/unknown.png";
//for filtering, im thinking of a checkbox where you can select as many filters as you want
//if user selects a filter, it gets pushed to an array
//only render sections that is included in that array
//if array is empty aka no filter, then render everything

const Allsnacks = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state);
  const salty = products.filter(
    (item) => item.cat?.type === "Salty" && item.display
  );
  const sweet = products.filter(
    (item) => item.cat?.type === "Sweet" && item.display
  );
  const healthy = products.filter(
    (item) => item.cat?.type === "Healthy" && item.display
  );
  const frozen = products.filter(
    (item) => item.cat?.type === "Refrigerated/Frozen" && item.display
  );

  const grocery = products.filter(
    (item) => item.cat?.type === "Grocery" && item.display
  );

  const drinks = products.filter(
    (item) => item.cat?.type === "Drinks" && item.display
  );

  const alcohol = products.filter(
    (item) => item.cat?.type === "Alcohol" && item.display
  );

  const cleaning = products.filter(
    (item) => item.cat?.type === "Cleaning" && item.display
  );

  const icecream = products.filter(
    (item) => item.cat?.type === "Ice Cream" && item.display
  );

  const quickmeals = products.filter(
    (item) => item.cat?.type === "Quick Meals" && item.display
  );

  const bathBeauty = products.filter(
    (item) => item.cat?.type === "Bath and Beauty" && item.display
  );

  const health = products.filter(
    (item) => item.cat?.type === "Health" && item.display
  );

  const homeoffice = products.filter(
    (item) => item.cat?.type === "Home and Office" && item.display
  );

  const pets = products.filter(
    (item) => item.cat?.type === "Pets" && item.display
  );

  const baby = products.filter(
    (item) => item.cat?.type === "Baby" && item.display
  );

  const sweetSnackRef = useRef(null);
  const healthySnackRef = useRef(null);
  const saltySnacksRef = useRef(null);
  const frozenSnacksRef = useRef(null);
  const groceryRef = useRef(null);
  const drinksRef = useRef(null);
  const alcoholRef = useRef(null);
  const cleaningRef = useRef(null);
  const iceCreamRef = useRef(null);
  const quickMealsRef = useRef(null);
  const bathRef = useRef(null);
  const healthRef = useRef(null);
  const homeRef = useRef(null);
  const petsRef = useRef(null);
  const babyRef = useRef(null);

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

  const Grocery = grocery.map((item) => (
    <SnackView
      key={item.name}
      photoUrl={item.photoURL}
      title={item.name}
      description={item.desc}
      price={item.price}
      snack={item}
    />
  ));

  const Drinks = drinks.map((item) => (
    <SnackView
      key={item.name}
      photoUrl={item.photoURL}
      title={item.name}
      description={item.desc}
      price={item.price}
      snack={item}
    />
  ));

  const Alcohol = alcohol.map((item) => (
    <SnackView
      key={item.name}
      photoUrl={item.photoURL}
      title={item.name}
      description={item.desc}
      price={item.price}
      snack={item}
    />
  ));

  const Cleaning = cleaning.map((item) => (
    <SnackView
      key={item.name}
      photoUrl={item.photoURL}
      title={item.name}
      description={item.desc}
      price={item.price}
      snack={item}
    />
  ));

  const IceCream = icecream.map((item) => (
    <SnackView
      key={item.name}
      photoUrl={item.photoURL}
      title={item.name}
      description={item.desc}
      price={item.price}
      snack={item}
    />
  ));

  const QuickMeals = quickmeals.map((item) => (
    <SnackView
      key={item.name}
      photoUrl={item.photoURL}
      title={item.name}
      description={item.desc}
      price={item.price}
      snack={item}
    />
  ));

  const BathandBeauty = bathBeauty.map((item) => (
    <SnackView
      key={item.name}
      photoUrl={item.photoURL}
      title={item.name}
      description={item.desc}
      price={item.price}
      snack={item}
    />
  ));

  const Health = health.map((item) => (
    <SnackView
      key={item.name}
      photoUrl={item.photoURL}
      title={item.name}
      description={item.desc}
      price={item.price}
      snack={item}
    />
  ));

  const HomeOffice = homeoffice.map((item) => (
    <SnackView
      key={item.name}
      photoUrl={item.photoURL}
      title={item.name}
      description={item.desc}
      price={item.price}
      snack={item}
    />
  ));

  const Pets = pets.map((item) => (
    <SnackView
      key={item.name}
      photoUrl={item.photoURL}
      title={item.name}
      description={item.desc}
      price={item.price}
      snack={item}
    />
  ));

  const Baby = baby.map((item) => (
    <SnackView
      key={item.name}
      photoUrl={item.photoURL}
      title={item.name}
      description={item.desc}
      price={item.price}
      snack={item}
    />
  ));

  const leftScroll = (reference) => {
    reference.current.scrollLeft += -400;
  };

  const rightScroll = (reference) => {
    reference.current.scrollLeft += 400;
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "sticky",
          backgroundColor: "white",
          width: "100%",
          marginTop: "20px",
          top: "60px",
          zIndex: 10,
        }}
      >
        <FilterIcons />
      </div>

      <div className='parent' style={{ marginBottom: "10vh" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "90%",
          }}
        >
          {/* <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "fixed",
              backgroundColor: "white",
            }}
          >
            <FilterIcons />
          </div> */}
          <div className='snack-title'>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              Sweet Snacks
              <div style={{ flexGrow: 1 }} />
              <div
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontSize: "15px",
                  fontWeight: "500",
                  marginRight: "15px",
                }}
              >
                <a href='/allsnacks'>View All</a>
              </div>
              <div
                className='leftcircle'
                onClick={() => {
                  leftScroll(sweetSnackRef);
                }}
              >
                <img src={left} alt='leftarrow' className='leftandright' />
              </div>
              <div
                className='leftcircle'
                style={{ marginLeft: "10px" }}
                onClick={() => rightScroll(sweetSnackRef)}
              >
                <img
                  src={rightArrow}
                  alt='rightarrow'
                  className='leftandright'
                />
              </div>
            </div>
          </div>
          <div>
            <div className='container snap-inline' ref={sweetSnackRef}>
              {SweetSnacks}
            </div>
          </div>

          <div className='snack-title'>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              Healthy Snacks
              <div style={{ flexGrow: 1 }} />
              <div
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontSize: "15px",
                  fontWeight: "500",
                  marginRight: "15px",
                }}
              >
                <a href='/allsnacks'>View All</a>
              </div>
              <div
                className='leftcircle'
                onClick={() => leftScroll(healthySnackRef)}
              >
                <img src={left} alt='leftarrow' className='leftandright' />
              </div>
              <div
                className='leftcircle'
                style={{ marginLeft: "10px" }}
                onClick={() => rightScroll(healthySnackRef)}
              >
                <img
                  src={rightArrow}
                  alt='rightarrow'
                  className='leftandright'
                />
              </div>
            </div>
          </div>
          <div>
            <div className='container snap-inline' ref={healthySnackRef}>
              {HealthySnacks}
            </div>
          </div>

          <div className='snack-title'>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              Salty Snacks
              <div style={{ flexGrow: 1 }} />
              <div
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontSize: "15px",
                  fontWeight: "500",
                  marginRight: "15px",
                }}
              >
                <a href='/allsnacks'>View All</a>
              </div>
              <div
                className='leftcircle'
                onClick={() => leftScroll(saltySnacksRef)}
              >
                <img src={left} alt='leftarrow' className='leftandright' />
              </div>
              <div
                className='leftcircle'
                style={{ marginLeft: "10px" }}
                onClick={() => rightScroll(saltySnacksRef)}
              >
                <img
                  src={rightArrow}
                  alt='rightarrow'
                  className='leftandright'
                />
              </div>
            </div>
          </div>
          <div>
            <div className='container snap-inline' ref={saltySnacksRef}>
              {SnackCards}
            </div>
          </div>

          <div className='snack-title'>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              Frozen Snacks
              <div style={{ flexGrow: 1 }} />
              <div
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontSize: "15px",
                  fontWeight: "500",
                  marginRight: "15px",
                }}
              >
                <a href='/allsnacks'>View All</a>
              </div>
              <div
                className='leftcircle'
                onClick={() => leftScroll(frozenSnacksRef)}
              >
                <img src={left} alt='leftarrow' className='leftandright' />
              </div>
              <div
                className='leftcircle'
                style={{ marginLeft: "10px" }}
                onClick={() => rightScroll(frozenSnacksRef)}
              >
                <img
                  src={rightArrow}
                  alt='rightarrow'
                  className='leftandright'
                />
              </div>
            </div>
          </div>
          <div>
            <div className='container snap-inline' ref={frozenSnacksRef}>
              {FrozenSnacks}
            </div>
          </div>

          <div className='snack-title'>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              Grocery
              <div style={{ flexGrow: 1 }} />
              <div
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontSize: "15px",
                  fontWeight: "500",
                  marginRight: "15px",
                }}
              >
                <a href='/allgrocery'>View All</a>
              </div>
              <div
                className='leftcircle'
                onClick={() => leftScroll(groceryRef)}
              >
                <img src={left} alt='leftarrow' className='leftandright' />
              </div>
              <div
                className='leftcircle'
                style={{ marginLeft: "10px" }}
                onClick={() => rightScroll(groceryRef)}
              >
                <img
                  src={rightArrow}
                  alt='rightarrow'
                  className='leftandright'
                />
              </div>
            </div>
          </div>
          <div>
            <div className='container snap-inline' ref={groceryRef}>
              {Grocery}
            </div>
          </div>

          <div className='snack-title'>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              Drinks
              <div style={{ flexGrow: 1 }} />
              <div
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontSize: "15px",
                  fontWeight: "500",
                  marginRight: "15px",
                }}
              >
                <a href='/alldrinks'>View All</a>
              </div>
              <div className='leftcircle' onClick={() => leftScroll(drinksRef)}>
                <img src={left} alt='leftarrow' className='leftandright' />
              </div>
              <div
                className='leftcircle'
                style={{ marginLeft: "10px" }}
                onClick={() => rightScroll(drinksRef)}
              >
                <img
                  src={rightArrow}
                  alt='rightarrow'
                  className='leftandright'
                />
              </div>
            </div>
          </div>
          <div>
            <div className='container snap-inline' ref={drinksRef}>
              {Drinks}
            </div>
          </div>

          <div className='snack-title'>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              Alcohol
              <div style={{ flexGrow: 1 }} />
              <div
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontSize: "15px",
                  fontWeight: "500",
                  marginRight: "15px",
                }}
              >
                <a href='/allalcohol'>View All</a>
              </div>
              <div
                className='leftcircle'
                onClick={() => leftScroll(alcoholRef)}
              >
                <img src={left} alt='leftarrow' className='leftandright' />
              </div>
              <div
                className='leftcircle'
                style={{ marginLeft: "10px" }}
                onClick={() => rightScroll(alcoholRef)}
              >
                <img
                  src={rightArrow}
                  alt='rightarrow'
                  className='leftandright'
                />
              </div>
            </div>
          </div>
          <div>
            <div className='container snap-inline' ref={alcoholRef}>
              {Alcohol}
            </div>
          </div>

          <div className='snack-title'>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              Cleaning
              <div style={{ flexGrow: 1 }} />
              <div
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontSize: "15px",
                  fontWeight: "500",
                  marginRight: "15px",
                }}
              >
                <a href='/allcleaning'>View All</a>
              </div>
              <div
                className='leftcircle'
                onClick={() => leftScroll(cleaningRef)}
              >
                <img src={left} alt='leftarrow' className='leftandright' />
              </div>
              <div
                className='leftcircle'
                style={{ marginLeft: "10px" }}
                onClick={() => rightScroll(cleaningRef)}
              >
                <img
                  src={rightArrow}
                  alt='rightarrow'
                  className='leftandright'
                />
              </div>
            </div>
          </div>
          <div>
            <div className='container snap-inline' ref={cleaningRef}>
              {Cleaning}
            </div>
          </div>

          <div className='snack-title'>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              Ice Cream
              <div style={{ flexGrow: 1 }} />
              <div
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontSize: "15px",
                  fontWeight: "500",
                  marginRight: "15px",
                }}
              >
                <a href='/ice_cream'>View All</a>
              </div>
              <div
                className='leftcircle'
                onClick={() => leftScroll(iceCreamRef)}
              >
                <img src={left} alt='leftarrow' className='leftandright' />
              </div>
              <div
                className='leftcircle'
                style={{ marginLeft: "10px" }}
                onClick={() => rightScroll(iceCreamRef)}
              >
                <img
                  src={rightArrow}
                  alt='rightarrow'
                  className='leftandright'
                />
              </div>
            </div>
          </div>
          <div>
            <div className='container snap-inline' ref={iceCreamRef}>
              {IceCream}
            </div>
          </div>

          <div className='snack-title'>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              Quick Meals
              <div style={{ flexGrow: 1 }} />
              <div
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontSize: "15px",
                  fontWeight: "500",
                  marginRight: "15px",
                }}
              >
                <a href='/quick_meals'>View All</a>
              </div>
              <div
                className='leftcircle'
                onClick={() => leftScroll(quickMealsRef)}
              >
                <img src={left} alt='leftarrow' className='leftandright' />
              </div>
              <div
                className='leftcircle'
                style={{ marginLeft: "10px" }}
                onClick={() => rightScroll(quickMealsRef)}
              >
                <img
                  src={rightArrow}
                  alt='rightarrow'
                  className='leftandright'
                />
              </div>
            </div>
          </div>
          <div>
            <div className='container snap-inline' ref={quickMealsRef}>
              {QuickMeals}
            </div>
          </div>

          <div className='snack-title'>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              Bath and Beauty
              <div style={{ flexGrow: 1 }} />
              <div
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontSize: "15px",
                  fontWeight: "500",
                  marginRight: "15px",
                }}
              >
                <a href='/bath_beauty'>View All</a>
              </div>
              <div className='leftcircle' onClick={() => leftScroll(bathRef)}>
                <img src={left} alt='leftarrow' className='leftandright' />
              </div>
              <div
                className='leftcircle'
                style={{ marginLeft: "10px" }}
                onClick={() => rightScroll(bathRef)}
              >
                <img
                  src={rightArrow}
                  alt='rightarrow'
                  className='leftandright'
                />
              </div>
            </div>
          </div>
          <div>
            <div className='container snap-inline' ref={bathRef}>
              {BathandBeauty}
            </div>
          </div>

          <div className='snack-title'>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              Health
              <div style={{ flexGrow: 1 }} />
              <div
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontSize: "15px",
                  fontWeight: "500",
                  marginRight: "15px",
                }}
              >
                <a href='/health'>View All</a>
              </div>
              <div className='leftcircle' onClick={() => leftScroll(healthRef)}>
                <img src={left} alt='leftarrow' className='leftandright' />
              </div>
              <div
                className='leftcircle'
                style={{ marginLeft: "10px" }}
                onClick={() => rightScroll(healthRef)}
              >
                <img
                  src={rightArrow}
                  alt='rightarrow'
                  className='leftandright'
                />
              </div>
            </div>
          </div>
          <div>
            <div className='container snap-inline' ref={healthRef}>
              {Health}
            </div>
          </div>

          <div className='snack-title'>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              Home and Office
              <div style={{ flexGrow: 1 }} />
              <div
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontSize: "15px",
                  fontWeight: "500",
                  marginRight: "15px",
                }}
              >
                <a href='/home_office'>View All</a>
              </div>
              <div className='leftcircle' onClick={() => leftScroll(homeRef)}>
                <img src={left} alt='leftarrow' className='leftandright' />
              </div>
              <div
                className='leftcircle'
                style={{ marginLeft: "10px" }}
                onClick={() => rightScroll(homeRef)}
              >
                <img
                  src={rightArrow}
                  alt='rightarrow'
                  className='leftandright'
                />
              </div>
            </div>
          </div>
          <div>
            <div className='container snap-inline' ref={homeRef}>
              {HomeOffice}
            </div>
          </div>

          <div className='snack-title'>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              Pets
              <div style={{ flexGrow: 1 }} />
              <div
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontSize: "15px",
                  fontWeight: "500",
                  marginRight: "15px",
                }}
              >
                <a href='/pets'>View All</a>
              </div>
              <div className='leftcircle' onClick={() => leftScroll(petsRef)}>
                <img src={left} alt='leftarrow' className='leftandright' />
              </div>
              <div
                className='leftcircle'
                style={{ marginLeft: "10px" }}
                onClick={() => rightScroll(petsRef)}
              >
                <img
                  src={rightArrow}
                  alt='rightarrow'
                  className='leftandright'
                />
              </div>
            </div>
          </div>
          <div>
            <div className='container snap-inline' ref={petsRef}>
              {Pets}
            </div>
          </div>

          <div className='snack-title'>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              Baby
              <div style={{ flexGrow: 1 }} />
              <div
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontSize: "15px",
                  fontWeight: "500",
                  marginRight: "15px",
                }}
              >
                <a href='/baby'>View All</a>
              </div>
              <div className='leftcircle' onClick={() => leftScroll(babyRef)}>
                <img src={left} alt='leftarrow' className='leftandright' />
              </div>
              <div
                className='leftcircle'
                style={{ marginLeft: "10px" }}
                onClick={() => rightScroll(babyRef)}
              >
                <img
                  src={rightArrow}
                  alt='rightarrow'
                  className='leftandright'
                />
              </div>
            </div>
          </div>
          <div>
            <div className='container snap-inline' ref={babyRef}>
              {Baby}
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Allsnacks;
