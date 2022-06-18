import axios from 'axios';

const ALL_PRODUCTS = 'ALL_PRODUCTS';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';

export const fetchAllProducts = (products) => ({
  type: ALL_PRODUCTS,
  products,
});

export const updateProduct = (product) => ({
  type: UPDATE_PRODUCT,
  product,
});

export const deleteProduct = (product) => ({
  type: DELETE_PRODUCT,
  product,
});

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/products');
      dispatch(fetchAllProducts(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const _updateProduct = (product) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/api/products/${product.id}`, product);
      dispatch(updateProduct(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const _deleteProduct = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`/api/products/${id}`);
      dispatch(deleteProduct(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export default function (state = [], action) {
  switch (action.type) {
    case ALL_PRODUCTS:
      return action.products;
    case UPDATE_PRODUCT:
      return state.map((product) =>
        product.id === action.product.id ? action.product : product
      );
    case DELETE_PRODUCT:
      return state.filter((product) => product.id !== action.product.id);
    default:
      return state;
  }
}
