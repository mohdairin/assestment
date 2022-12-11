import {
    ADD_DATA,
    GET_DATA
} from "../action/types";

const initialState = {
    arr: []
}

function users(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case ADD_DATA:
            // const arrayData = state.arr.push(payload);

            return {
                ...state,
                arr: [payload, ...state.arr]
            }
        case GET_DATA:
            return {
                ...state,
                data: [
                    { value: 'Airin' },
                    { value: 'Luffy' },
                    { value: 'Vegeta' },
                    { value: 'Kakarot' },
                    { value: 'Tarzan' },
                    { value: 'Piccolo' },
                    { value: 'Zoro' },
                    { value: 'Sanji' },
                    { value: 'Boruto' },
                ]
            }
        default:
            return state;
    }
};

export default users;