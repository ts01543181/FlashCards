import { ADD_CARD, EDIT_CARD, DELETE_CARD } from "../actions/actionTypes";

const cardReducer = (state=[], action) => {
    switch(action.type) {
        case ADD_CARD:
            return [...state, action.payload];
        case EDIT_CARD:
            for (let card of state) {
                if (card.id === action.payload.id) {
                    card = action.payload;
                }
            }
            return state;
        case DELETE_CARD:
            let copy = [...state];
            for (let i = 0; i < copy.length; i++) {
                if (copy[i].id === action.payload.id) {
                    copy.splice(i, 1);
                    break;
                }
            }
            return copy;
        default:
            return state;
    }
};

export default cardReducer;