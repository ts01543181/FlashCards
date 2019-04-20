import {combineReducers} from 'redux';
import sessionReducer from './session_reducer';
import cardReducer from './card_reducer';
import collectionReducer from "./collection_reducer";

const rootReducer = combineReducers({
  session: sessionReducer,
  card: cardReducer,
  collection: collectionReducer
});

export default rootReducer;