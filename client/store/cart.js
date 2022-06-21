import axios from "axios";

const CURRENT_CART = "CURRENT_CART";
const ADD_TO_CART = "Add_TO_CART";
const UPDATE_CART = "UPDATE_CART";
const DELETE_CART = "DELETE_CART";
//Action Creator

export const currentCart = (products) => ({
  type: CURRENT_CART,
  products,
});

export const atc = (product) => ({
  type: ADD_TO_CART,
  product,
});

export const setUpdateCart = (product) => ({
  type: UPDATE_CART,
  product,
});

export const deleteCart = (product) => ({
  type: DELETE_CART,
  product,
});

// Thunks
export const fetchCart = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/users/${id}`);
      dispatch(currentCart(data.shopping_session.cart_items));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addToCart = (product) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        `/api/products/${product.id}/cartItem`,
        product
      );

      dispatch(atc(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const updateCart = (product) => {
  return async (dispatch) => {
    try {
      const { data: updatedSnack } = await axios.put(
        `/api/products/${product.productId}/cartItem`,
        product
      );
      dispatch(setUpdateCart(updatedSnack));
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteCartItem = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`/api/products/${id}/cartItem`);
      dispatch(deleteCart(data));
    } catch (error) {
      console.error(error);
    }
  };
};

//SubReducer
const initialState = [];

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_CART:
      return action.products;
    case ADD_TO_CART:
      return [...state, action.product];
    case UPDATE_CART:
      return state.map((snack) => {
        return snack.productId === action.product.productId
          ? action.product
          : snack;
      });
    case DELETE_CART:
      return state.filter((product) => product.id !== action.product.id);
    default:
      return state;
  }
};
