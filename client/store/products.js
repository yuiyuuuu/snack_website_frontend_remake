import axios from "axios";

const FETCH_PRODUCTS = "FETCH_PRODUCTS";

export const fetchAllProducts = (products) => ({
  type: FETCH_PRODUCTS,
  products,
});

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/products");
      dispatch(fetchAllProducts(data));
    } catch (error) {
      console.error(error);
    }
  };
};

const initialState = [];

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.products;
    default:
      return state;
  }
}
