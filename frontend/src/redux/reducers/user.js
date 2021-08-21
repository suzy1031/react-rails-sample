import { Types } from '../actions/allActions';

const defaultState = {
  payload: {},
  loading: true,
};

const asyncCurrentUser = (state = defaultState, action) => {
  switch (action.type) {
    case Types.FETCH_USER_DATA:
      return { ...state, loading: true };
    case Types.SET_USER_DATA:
      return { ...state, payload: action.payload, loading: false };
    default:
      return state;
  }
};

const asyncUserPostsData = (state = '', action) => {
  switch (action.type) {
    case Types.SET_USER_POST_DATA:
      return { ...state, payload: action.payload };
    default:
      return state;
  }
};

export { asyncCurrentUser, asyncUserPostsData };
