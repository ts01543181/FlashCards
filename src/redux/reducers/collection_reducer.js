import { ADD_COLLECTION, ADD_CARD, EDIT_CARD, DELETE_CARD } from "../actions/actionTypes";

const updateCollection = (card, collections) => {
    for (let col of collections) {
        if (col.title === card.collection) {
            col.cards.push(card);
            return collections;
        }
    }
};

const editCollection = (card, collections, id) => {
    for (let col of collections) {
        if (card.collection === col.title) {
            col.cards[id] = card;
            return collections;
        }
    }
}
const collectionReducer = (state=[], action) => {
    switch(action.type) {
        case ADD_COLLECTION:
            return [...state, action.payload];
        case ADD_CARD:
            return updateCollection(action.payload, state);
        case EDIT_CARD:
            const { card, id } = action.payload; 
            return editCollection(card, state, id);
        default:
            return state;
    };
};

export default collectionReducer;