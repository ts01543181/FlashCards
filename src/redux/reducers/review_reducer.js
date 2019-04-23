import { ADD_REVIEW, DELETE_REVIEW } from "../actions/actionTypes";

const deleteReview = (card, reviews) => {
    for (let i = 0; i < reviews.length; i++) {
        if (reviews[i].term === card.term) {
            reviews.splice(i, 1);
            return reviews;
        }
    }
};

const reviewReducer = (state=[], action) => {
    switch(action.type) {
        case ADD_REVIEW:
            return [...state, action.payload.card];
        case DELETE_REVIEW:
            return deleteReview(action.payload.card, state);
        default:
            return state;
    }
}

export default reviewReducer;