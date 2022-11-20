import {
  GET_USER,
} from "../action/types";

const initialState = [];

function users(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_USER:
      return { 
        userList: payload };
    default:
      return state;
  }
};

export default users;