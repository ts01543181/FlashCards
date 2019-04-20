import { ADD_COLLECTION, ADD_CARD, EDIT_CARD, DELETE_CARD } from "../actions/actionTypes";

const collectionReducer = (state=[], action) => {
    switch(action.type) {
        case ADD_COLLECTION:
            const copy = [...state, action.payload];
            return copy;
        default:
            return state;
    };
};

export default collectionReducer;