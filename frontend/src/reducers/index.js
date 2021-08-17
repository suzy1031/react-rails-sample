import { combineReducers } from 'redux';
import { asyncListData } from './post';

const rootReducer = combineReducers({
  asyncListData,
});

export default rootReducer;
