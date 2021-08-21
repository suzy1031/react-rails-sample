import { combineReducers } from 'redux';
import { asyncListData, asyncDetailData } from './post';
import { asyncCurrentUser, asyncUserPostsData } from './user';

const rootReducer = combineReducers({
  asyncListData,
  asyncDetailData,
  asyncCurrentUser,
  asyncUserPostsData,
});

export default rootReducer;
