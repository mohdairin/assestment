import {
      LOGIN
  } from "../action/types";
  
  const initialState = [];
  
  function auth(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case LOGIN:
        return {
          loginDetails: payload
        };
      default:
        return state;
    }
  };
  
  export default auth;