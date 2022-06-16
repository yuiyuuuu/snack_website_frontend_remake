import axios from "axios";

const GET_USER = "GET_USER";

export const fetchUser = (user) => ({
  type: GET_USER,
  user,
});

export const fetchAUser = (id) => {
  return async (dispatch) => {
    try {
      console.log("id::::", id);
      const { data } = await axios.get(`/api/users/${id}`);
      console.log("AAAAA:", data);
      dispatch(fetchUser(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export default function (state = {}, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    default:
      return state;
  }
}
