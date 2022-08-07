import axios from "axios";

const ALL_ORDERS = "ALL_ORDERS";
const CANCEL_ORDER = "CANCEL_ORDER";

export const fetchAdminOrders = (orders) => ({
  type: ALL_ORDERS,
  orders,
});

export const cancelAnOrder = (order) => ({
  type: CANCEL_ORDER,
  order,
});

export const fetchAllAdminOrders = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/orders/allorders`);
      dispatch(fetchAdminOrders(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const cancelOrder = (orderId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`/api/orders/${orderId}/cancel`);
      dispatch(cancelAnOrder(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export default function (state = [], action) {
  switch (action.type) {
    case ALL_ORDERS:
      return action.orders;
    case CANCEL_ORDER:
      return state.filter((item) => item.id !== action.order.id);
    default:
      return state;
  }
}
