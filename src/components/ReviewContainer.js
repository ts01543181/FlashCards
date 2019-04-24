import { connect } from 'react-redux';
import Review from "./Review";
import { withRouter } from "react-router-dom";
import { deleteReview, editCard } from "../redux/actions/card_api"

const mapDispatchToProps = dispatch => ({
    deleteReview: (card, id) => dispatch(deleteReview(card, id)),
    editCard:(card, id) => dispatch(editCard(card, id)),
});

const mapStateToProps = state => ({
    review: state.review,
    collection: state.collection
});

const ReviewContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Review));

export default ReviewContainer;