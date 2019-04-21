import { ADD_CARD, EDIT_CARD, ADD_COLLECTION, DELETE_CARD } from "./actionTypes";

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
};

export const addCollection = collection => dispatch => {
    dispatch({
        type: ADD_COLLECTION,
        payload: collection
    });
    return Promise.resolve();
};