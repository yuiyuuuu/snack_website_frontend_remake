import React from "react";
import "./home.css";
import Navbar from "../Navbar/Navbar.js";

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className='home--landingPage'>
        <a className='home--allsnacks' href='/allsnacks'>
          All Snacks
        </a>
      </div>
      <div>hi</div>
    </div>
  );
};

export default Home;
