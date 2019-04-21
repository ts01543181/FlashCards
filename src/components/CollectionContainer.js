import { connect } from 'react-redux';
import Collection from "./Collection";
import { addCard, editCard, deleteCard } from "../redux/actions/card_api";
import { withRouter } from "react-router-dom";

const mapDispatchToProps = dispatch => ({
    addCard: (data) => dispatch(addCard(data)),
    editCard: (data) => dispatch(editCard(data)),
    deleteCard: (data) => dispatch(deleteCard(data)),
});

const mapStateToProps = state => ({
    collection: state.collection
});

const CollectionContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Collection));

export default CollectionContainer;