import {combineReducers} from 'redux';
import collectionReducer from "./collection_reducer";

const rootReducer = combineReducers({
  collection: collectionReducer
});

export default rootReducer;