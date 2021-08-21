import { Types } from '../actions/allActions';

const asyncCurrentUser = (state = '', action) => {
  switch (action.type) {
    case Types.SET_USER_DATA:
      return { ...state, payload: action.payload };
    default:
      return state;
  }
};

export { asyncCurrentUser };
