import { ADD_COLLECTION } from "../actions/actionTypes";

const collectionReducer = (state=[], action) => {
    switch(action.type) {
        case ADD_COLLECTION:
            return [...state, action.payload];
        default:
            return state;
    };
};

export default collectionReducer;