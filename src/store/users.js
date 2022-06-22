import axios from 'axios';

const TOKEN = 'token';
const GET_ALL_USERS = 'GET_ALL_USERS';
const UPDATE_USER = 'UPDATE_USER';
const DELETE_USER = 'DELETE_USER';
const UPDATE_ADMIN_USER = 'UPDATE_ADMIN_USER';

export const getAllUsers = (users) => ({
  type: GET_ALL_USERS,
  users,
});

export const updateUser = (user) => ({
  type: UPDATE_USER,
  user,
});

export const updateAdminUser = (user) => ({
  type: UPDATE_ADMIN_USER,
  user,
});

export const deleteUser = (user) => ({
  type: DELETE_USER,
  user,
});

export const fetchAllUsers = () => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      const { data } = await axios.get(`/api/users`, {
        headers: {
          authorization: token,
        },
      });
      dispatch(getAllUsers(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const _updateUser = (user) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/api/users/${user.id}`, user);
      dispatch(updateUser(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const _updateAdminUser = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/api/users/${id}/admin`);
      dispatch(updateAdminUser(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const _deleteUser = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`/api/users/${id}`);
      dispatch(deleteUser(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export default function (state = [], action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return action.users;
    case UPDATE_USER:
      return state.map((user) =>
        user.id === action.user.id ? action.user : user
      );

    case UPDATE_ADMIN_USER:
      return state.map((user) =>
        user.id === action.user.id ? action.user : user
      );

    case DELETE_USER:
      return state.filter((user) => user.id !== action.user.id);
    default:
      return state;
  }
}
