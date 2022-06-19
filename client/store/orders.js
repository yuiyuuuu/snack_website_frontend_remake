import axios from 'axios';

const ALL_ORDERS = 'ALL_ORDERS';

export const fetchAllOrders = (orders) => ({
  type: ALL_ORDERS,
  orders,
});

export const fetchOrders = (userId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/orders/${userId}`);
      dispatch(fetchAllOrders(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export default function (state = [], action) {
  switch (action.type) {
    case ALL_ORDERS:
      return action.orders;
    default:
      return state;
  }
}
