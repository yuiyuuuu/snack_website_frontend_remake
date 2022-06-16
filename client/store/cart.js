import Axios from "axios";

const ADD_TO_CART = "Add_TO_CART";

export const atc = (product) => ({
  type: ADD_TO_CART,
  product,
});

export const addToCart = (product) => {
  return async (dispatch) => {
    try {
      console.log(product);
      const { data } = await Axios.post(
        `/api/products/${product.id}/cartItem`,
        product
      );

      dispatch(atc(data));
    } catch (error) {
      console.error(error);
    }
  };
};

const initialState = [];

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.product];
    default:
      return state;
  }
};
