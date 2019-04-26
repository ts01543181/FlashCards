import { connect } from 'react-redux';
import Mock from "./Mock";
import { withRouter } from "react-router-dom";

const mapDispatchToProps = dispatch => ({

});

const mapStateToProps = state => ({
    collection: state.collection,
    review: state.review
});

const MockContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Mock));

export default MockContainer;