import { combineReducers } from 'redux';
import { asyncListData, asyncDetailData } from './post';
import { asyncCurrentUser, asyncUserPostsData, asyncSignIn } from './user';

const rootReducer = combineReducers({
  asyncListData,
  asyncDetailData,
  asyncCurrentUser,
  asyncUserPostsData,
  asyncSignIn,
});

export default rootReducer;
