import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";
import products from "./Snacks";
import { cartReducer } from "./cart";
import user from "./user";
import singleSnack from "./singleSnack";
import checkout from "./checkout";
import { addressReducer } from "./useraddresses";
import MessagesReducer from "./messages";

import users from "./users";
import orders from "./orders";
import adminOrders from "./adminOrders";

const reducer = combineReducers({
  auth,
  products,
  cartReducer,
  user,
  singleSnack,
  orders,
  users,
  checkout,
  addressReducer,
  adminOrders,
  MessagesReducer,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
export * from "./user";
export * from "./users";
export * from "./orders";
