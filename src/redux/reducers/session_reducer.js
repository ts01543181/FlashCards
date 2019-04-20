import { LOGIN, SIGNUP } from "../actions/actionTypes";

const sessionReducer = (state={}, action) => {
    switch(action.type) {
        case LOGIN, SIGNUP:
            return action.payload;
        default:
            return state;
    }
};

export default sessionReducer;