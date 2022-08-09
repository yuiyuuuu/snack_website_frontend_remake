const FETCH_ADDRESSES = "FETCH_ADDRESSES";
const ADD_ADDRESS = "ADD_ADDRESS";
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const DELETE_ADDRESS = "DELETE_ADDRESS";

import axios from "axios";

export const fetchAddress = (addresses) => ({
  type: FETCH_ADDRESSES,
  addresses,
});

export const addAddress = (address) => ({
  type: ADD_ADDRESS,
  address,
});

export const updateAddress = (address) => ({
  type: UPDATE_ADDRESS,
  address,
});

export const deleteAddress = (address) => ({
  type: DELETE_ADDRESS,
  address,
});

export const fetchAllAddresses = (addressid) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/users/${addressid}/useraddresses`);
      dispatch(fetchAddress(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const addAnAddress = (addressObj) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        `/api/users/${addressObj.userId}/useraddresses`,
        addressObj
      );
      dispatch(addAddress(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteAnAddress = (userId, addressid) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(
        `/api/users/${userId}/useraddresses/${addressid}`
      );
      dispatch(deleteAddress(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export function addressReducer(state = [], action) {
  switch (action.type) {
    case FETCH_ADDRESSES:
      return action.addresses;
    case ADD_ADDRESS:
      return [...state, action.address];
    case DELETE_ADDRESS:
      return state.filter((item) => item.id !== action.address.id);
    default:
      return state;
  }
}
