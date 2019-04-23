import {combineReducers} from 'redux';
import collectionReducer from "./collection_reducer";
import reviewReducer from "./review_reducer"
const rootReducer = combineReducers({
  collection: collectionReducer,
  review: reviewReducer
});

export default rootReducer;