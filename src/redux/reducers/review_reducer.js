import { ADD_REVIEW, DELETE_REVIEW, EDIT_REVIEW } from "../actions/actionTypes";

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
            let copy = [...state];
            return deleteReview(action.payload.card, copy);
        case EDIT_REVIEW:
            copy = [...state];
            copy[action.payload.card.reviewInd] = action.payload.card;
            return copy;
        default:
            return state;
    }
}

export default reviewReducer;