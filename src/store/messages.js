import axios from "axios";

const FETCH_MESSAGES = "FETCH_MESSAGES";
const ADD_MESSAGE = "ADD_MESSAGE";

export const fetchMessages = (messages) => ({
  type: FETCH_MESSAGES,
  messages,
});

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  message,
});

export const fetchAllMessages = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/messages");
      dispatch(fetchMessages(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addAMessage = (message) => {
  return async (dispatch) => {
    try {
      console.log(message);
      const { data } = await axios.post("/api/messages", message);
      dispatch(addMessage(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const MessagesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_MESSAGES:
      return action.messages;
    case ADD_MESSAGE:
      return [...state, action.message];
    default:
      return state;
  }
};

export default MessagesReducer;
