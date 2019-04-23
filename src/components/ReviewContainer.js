import { connect } from 'react-redux';
import Review from "./Review";
import { withRouter } from "react-router-dom";

const mapDispatchToProps = dispatch => ({
    
});

const mapStateToProps = state => ({
    review: state.review
});

const ReviewContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Review));

export default ReviewContainer;