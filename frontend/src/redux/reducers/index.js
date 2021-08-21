import { combineReducers } from 'redux';
import { asyncListData, asyncDetailData } from './post';
import { asyncCurrentUser } from './user';

const rootReducer = combineReducers({
  asyncListData,
  asyncDetailData,
  asyncCurrentUser,
});

export default rootReducer;
