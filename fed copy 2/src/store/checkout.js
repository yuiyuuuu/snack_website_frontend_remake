import axios from "axios";

const CREATE_ORDER_DETAIL = "CREATE_ORDER_DETAIL";
const CREATE_ORDER_ITEM = "CREATE_ORDER_ITEM";
const UPDATE_PRODUCT_QUANTITY = "UPDATE_PRODUCT_QUANTITY ";
const DELETE_CART_ITEM = "DELETE_CART_ITEM";
const DELETE_SHOPPING_SESSION = "DELETE_SHOPPING_SESSION";
const CREATE_SHOPPING_SESSION = "CREATE_SHOPPING_SESSION";

export const createOrderDetail = (orderDetail) => ({
  type: CREATE_ORDER_DETAIL,
  orderDetail,
});

export const createOrderItem = (orderItem) => ({
  type: CREATE_ORDER_ITEM,
  orderItem,
});

export const updateProductQuantity = (product) => ({
  type: UPDATE_PRODUCT_QUANTITY,
  product,
});

export const deleteCartItem = (item) => ({
  type: DELETE_CART_ITEM,
  item,
});

export const deleteShoppingSession = (shopping_session) => ({
  type: DELETE_SHOPPING_SESSION,
  shopping_session,
});

export const createshoppingSession = (shopping_session) => ({
  type: CREATE_SHOPPING_SESSION,
  shopping_session,
});

export const _createOrderDetail = (detailTotal) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        `/api/orders/${detailTotal.userId}`,
        detailTotal
      );
      dispatch(createOrderDetail(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const _createOrderItem = (obj) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        `/api/orders/${obj.itemId}/orderItem`,
        obj
      );
      dispatch(createOrderItem(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const _updateProductQuantity = (product) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/api/products/${product.id}`, product);
      dispatch(updateProductQuantity(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const _deleteCartItem = (cartItemId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(
        `/api/products/${cartItemId}/cartItem`
      );
      dispatch(deleteCartItem(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const _deleteShoppingSession = (shoppingSessionId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(
        `/api/orders/${shoppingSessionId}/shoppingsession`
      );
      dispatch(deleteShoppingSession(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const _createshoppingSession = (userId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        `/api/orders/${userId}/shoppingsession`
      );
      dispatch(createshoppingSession(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export default function (state = [], action) {
  switch (action.type) {
    case CREATE_ORDER_DETAIL:
      return action.orderDetail;
    case CREATE_ORDER_ITEM:
      return action.orderItem;
    case UPDATE_PRODUCT_QUANTITY:
      return action.product;
    case DELETE_CART_ITEM:
      return action.item;
    case DELETE_SHOPPING_SESSION:
      return action.shopping_session;
    case CREATE_SHOPPING_SESSION:
      return action.shopping_session;
    default:
      return state;
  }
}
