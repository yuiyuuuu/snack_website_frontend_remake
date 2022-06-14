import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Login, Signup } from "./components/AuthForm";
import Home from "./components/Home";
import { me } from "./store";

import Cart from "./components/CartCheckout/Cart";
import Checkout from "./components/CartCheckout/Checkout";
import ConfirmationPage from "./components/CartCheckout/ConfirmationPage";
import MyAccount from "./components/MyAccount";
import ManagePage from "./components/ManagePage";
//import { Cart, Checkout, ConfirmationPage } from "./components/CartCheckout";
// import { AllSnacks, SingleSnacks } from "./components/SnacksPages";
// import { ErrorPage, MyAccount, ManagePage } from "./components";

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/myaccount" component={MyAccount} />
            <Route exact path="/managepage" component={ManagePage} />
            <Route exact path="/home" component={Home} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        )}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
