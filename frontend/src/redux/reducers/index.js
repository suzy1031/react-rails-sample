import { combineReducers } from 'redux';
import { asyncListData, asyncDetailData } from './post';
import {
  asyncCurrentUser,
  asyncUserPostsData,
  asyncSignIn,
  asyncSignUp,
} from './user';

const rootReducer = combineReducers({
  asyncListData,
  asyncDetailData,
  asyncCurrentUser,
  asyncUserPostsData,
  asyncSignIn,
  asyncSignUp,
});

export default rootReducer;
