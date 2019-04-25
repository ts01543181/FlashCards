import { ADD_CARD, EDIT_CARD, ADD_COLLECTION, DELETE_CARD, ADD_REVIEW, DELETE_REVIEW, EDIT_REVIEW } from "./actionTypes";

export const addCard = (card) => dispatch => {
    dispatch({
        type: ADD_CARD,
        payload: card
    });
};

export const editCard = (card, id) => dispatch => {
    dispatch({
        type: EDIT_CARD,
        payload: {card, id}
    });
    return Promise.resolve();
};

export const deleteCard = (card, id) => dispatch => {
    dispatch({
        type: DELETE_CARD,
        payload: {card, id}
    });
    return Promise.resolve();
};

export const addCollection = collection => dispatch => {
    dispatch({
        type: ADD_COLLECTION,
        payload: collection
    });
    return Promise.resolve();
};

export const addReview = (card, id) => dispatch => {
    dispatch({
        type: ADD_REVIEW,
        payload: {card, id}
    });
    return Promise.resolve();
}

export const deleteReview = (card, id) => dispatch => {
    dispatch({
        type: DELETE_REVIEW,
        payload: {card, id}
    });
    return Promise.resolve();
}

export const editReview = (card) => dispatch => {
    dispatch({
        type: EDIT_REVIEW,
        payload: {card}
    });
    return Promise.resolve();
}