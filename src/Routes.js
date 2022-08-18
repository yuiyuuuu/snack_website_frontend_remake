import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home/Home";
import Allsnacks from "./components/Allsnacks/Allsnacks";
import MyAccount from "./components/MyAccount/MyAccount";
import Checkout from "./components/Checkout/Checkout";
import SingleSnack from "./components/Allsnacks/SingleSnack/SingleSnack";
import { me } from "./store";
import Cart from "./components/Cart/Cart";
import Login from "./Auth/login/Login";
import Signup from "./Auth/signup/Signup";
import AdminMain from "./components/AdminPages/AdminMain";
import RealAllSnacks from "./components/Allsnacks/AllPages/RealAllSnacks";
import AllGrocery from "./components/Allsnacks/AllPages/AllGrocery";
import AllDrinks from "./components/Allsnacks/AllPages/AllDrinks";
import AllAlcohol from "./components/Allsnacks/AllPages/AllAlcohol";
import AllCleaning from "./components/Allsnacks/AllPages/AllCleaning";
import IceCream from "./components/Allsnacks/AllPages/IceCream";
import Credits from "./components/Credits";
import QuickMeals from "./components/Allsnacks/AllPages/QuickMeals";
import BathBeauty from "./components/Allsnacks/AllPages/BathBeauty";
import Health from "./components/Allsnacks/AllPages/Health";
import HomeOffice from "./components/Allsnacks/AllPages/HomeOffice";
import Pets from "./components/Allsnacks/AllPages/Pets";
import Baby from "./components/Allsnacks/AllPages/Baby";

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }
  //test

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        {!isLoggedIn ? (
          <Switch>
            <Route exact path='/bullseye' component={Allsnacks} />
            <Route exact path='/myaccount' component={MyAccount} />
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='/allsnacks/:snackId' component={SingleSnack} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/allsnacks' component={RealAllSnacks} />
            <Route exact path='/allgrocery' component={AllGrocery} />
            <Route exact path='/alldrinks' component={AllDrinks} />
            <Route exact path='/allalcohol' component={AllAlcohol} />
            <Route exact path='/allcleaning' component={AllCleaning} />
            <Route exact path='/ice_cream' component={IceCream} />
            <Route exact path='/credits' component={Credits} />
            <Route exact path='/quick_meals' component={QuickMeals} />
            <Route exact path='/bath_beauty' component={BathBeauty} />
            <Route exact path='/health' component={Health} />
            <Route exact path='/home_office' component={HomeOffice} />
            <Route exact path='/pets' component={Pets} />
            <Route exact path='/baby' component={Baby} />
            <Route exact path='/' component={Home} />
          </Switch>
        ) : (
          <Switch>
            <Route exact path='/bullseye' component={Allsnacks} />
            <Route exact path='/myaccount' component={MyAccount} />
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='/allsnacks/:snackId' component={SingleSnack} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/admin' component={AdminMain} />
            <Route exact path='/allsnacks' component={RealAllSnacks} />
            <Route exact path='/allgrocery' component={AllGrocery} />
            <Route exact path='/alldrinks' component={AllDrinks} />
            <Route exact path='/allalcohol' component={AllAlcohol} />
            <Route exact path='/allcleaning' component={AllCleaning} />
            <Route exact path='/ice_cream' component={IceCream} />
            <Route exact path='/credits' component={Credits} />
            <Route exact path='/quick_meals' component={QuickMeals} />
            <Route exact path='/bath_beauty' component={BathBeauty} />
            <Route exact path='/health' component={Health} />
            <Route exact path='/home_office' component={HomeOffice} />
            <Route exact path='/pets' component={Pets} />
            <Route exact path='/baby' component={Baby} />
            <Route exact path='/' component={Home} />
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
    isLoggedIn: !!state.auth.id, //auth is in reducer in index.js of store
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
