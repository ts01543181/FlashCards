import { connect } from 'react-redux';
import Collection from "./Collection";
import { addCard, editCard, deleteCard } from "../redux/actions/card_api";
import { withRouter } from "react-router-dom";

const mapDispatchToProps = dispatch => ({
    addCard: (card) => dispatch(addCard(card)),
    editCard: (card, id) => dispatch(editCard(card, id)),
    deleteCard: (data) => dispatch(deleteCard(data)),
});

const mapStateToProps = state => ({
    collection: state.collection
});

const CollectionContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Collection));

export default CollectionContainer;