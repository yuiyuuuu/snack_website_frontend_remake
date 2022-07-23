import React from "react";

import Navbar from "./components/Navbar/Navbar.js";
import Routes from "./Routes";
import BottomNav from "./components/BottomNav/BottomNav.js";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <BottomNav />
    </div>
  );
};

export default App;
