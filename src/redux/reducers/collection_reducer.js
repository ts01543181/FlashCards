import { ADD_COLLECTION, ADD_CARD, EDIT_CARD, DELETE_CARD } from "../actions/actionTypes";

const updateCollection = (card, collections) => {
    for (let col of collections) {
        if (col.title == card.collection) {
            col.cards.push(card);
            return collections;
        }
    }
}
const collectionReducer = (state=[], action) => {
    switch(action.type) {
        case ADD_COLLECTION:
            const copy = [...state, action.payload];
            return copy;
        case ADD_CARD:
            return updateCollection(action.payload, state);
        default:
            return state;
    };
};

export default collectionReducer;