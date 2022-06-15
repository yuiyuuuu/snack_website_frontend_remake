import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Login, Signup } from './components/AuthForm/AuthForm';
import Home from './components/Home/Home';
import { me } from './store';
import AuthForm from './components/AuthForm/AuthForm';
import Cart from './components/CartCheckout/Cart';
import Checkout from './components/CartCheckout/Checkout';
import ConfirmationPage from './components/CartCheckout/ConfirmationPage';
import MyAccount from './components/MyAccount/MyAccount';
import ManagePage from './components/ManagePage/ManagePage';
import AllSnacks from './components/SnacksPages/AllSnacks';
// import { ErrorPage, MyAccount, ManagePage } from "./components";

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
            <Route exact path='/' component={Home} />
            <Route exact path='/allsnacks' component={AllSnacks} />
            <Route exact path='/myaccount' component={MyAccount} />
            <Route exact path='/managepage' component={ManagePage} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/checkout' component={Checkout} />
          </Switch>
        ) : (
          <Switch>
            <Route exact path='/allsnacks' component={AllSnacks} />
            <Route exact path='/' component={Home} />

            <Route exact path='/login'>
              <AuthForm formName='login' />
            </Route>
            <Route exact path='/signup'>
              <AuthForm formName='signup' />
            </Route>
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
