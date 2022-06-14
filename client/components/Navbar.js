import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
import {
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
  Typography,
  Avatar,
} from "@material-ui/core";
import { ShoppingCart, Person, Settings } from "@material-ui/icons";

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    {/* <Typography variant="h3">Federation Store</Typography> */}
    <AppBar>
      <Toolbar>
        <Avatar src="https://cdn-icons-png.flaticon.com/512/1160/1160358.png" />

        {isLoggedIn ? (
          <div>
            <IconButton>
              <Link to="/myaccount">
                <Person />
              </Link>
            </IconButton>

            <Link to="/cart">
              <IconButton>
                <ShoppingCart />
              </IconButton>
            </Link>

            <Link to="/managepage">
              <IconButton>
                <Settings />
              </IconButton>
            </Link>

            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </div>
        ) : (
          <div>
            <Link to="/login">
              <IconButton>
                <Person />
              </IconButton>
            </Link>

            <Link to="/login">
              <IconButton>
                <ShoppingCart />
              </IconButton>
            </Link>
            {/* The navbar will show these links before you log in */}
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
    <hr />
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
