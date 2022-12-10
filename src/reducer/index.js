import { combineReducers } from "redux";
import users from "./users";
import auth from "./auth";
import data from "./data";

export default combineReducers({
    loginDetails: auth,
    userData:users,
    autoCompleteData:data
});