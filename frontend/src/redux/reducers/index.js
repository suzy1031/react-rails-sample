import { combineReducers } from 'redux';
import { asyncListData, asyncDetailData } from './post';

const rootReducer = combineReducers({
  asyncListData,
  asyncDetailData,
});

export default rootReducer;
