import axios from "axios";

const ALL_PRODUCTS = "ALL_PRODUCTS";

export const fetchAllProducts = (products) => ({
  type: ALL_PRODUCTS,
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

export default function (state = [], action) {
  switch (action.type) {
    case ALL_PRODUCTS:
      return action.products;
    default:
      return state;
  }
}
