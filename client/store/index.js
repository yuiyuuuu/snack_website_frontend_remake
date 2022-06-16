import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";
import products from "./products";
import { cartReducer } from "./cart";
import user from "./user";
import singleSnack from "./singleSnack";
import profile from './profile';

const reducer = combineReducers({
  auth,
  products,
  cartReducer,
  user,
  singleSnack,
  profile
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from './auth';
export * from './profile';
export * from "./user";
