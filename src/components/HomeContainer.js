import { connect } from 'react-redux';
import Home from "./Home";
import { addCollection } from "../redux/actions/card_api";
import { withRouter } from "react-router-dom";

const mapDispatchToProps = dispatch => ({
    addCollection: (data) => dispatch(addCollection(data))
});

const mapStateToProps = state => ({
    collection: state.collection
});

const HomeContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));

export default HomeContainer;