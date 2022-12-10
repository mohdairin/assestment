import {
    ADD_DATA,
} from "../action/types";

const initialState = {
    arr:[]
}

function users(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case ADD_DATA:
           // const arrayData = state.arr.push(payload);
           
            return {
                ...state,
                arr:[payload,...state.arr] 
            }
        default:
            return state;
    }
};

export default users;