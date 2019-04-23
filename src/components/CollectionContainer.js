import { connect } from 'react-redux';
import Collection from "./Collection";
import { addCard, editCard, deleteCard, addReview, deleteReview } from "../redux/actions/card_api";
import { withRouter } from "react-router-dom";

const mapDispatchToProps = dispatch => ({
    addCard: (card) => dispatch(addCard(card)),
    editCard: (card, id) => dispatch(editCard(card, id)),
    deleteCard: (card, id) => dispatch(deleteCard(card, id)),
    addReview: (card, id) => dispatch(addReview(card, id)),
    deleteReview: (card, id) => dispatch(deleteReview(card, id)),
});

const mapStateToProps = state => ({
    collection: state.collection,
    review: state.review
});

const CollectionContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Collection));

export default CollectionContainer;