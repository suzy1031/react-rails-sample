export const userTypes = {
  FETCH_USER_DATA: 'FETCH_USER_DATA',
  SET_USER_DATA: 'SET_USER_DATA',
  GET_ASYNC_CURRENT_USER: 'GET_ASYNC_CURRENT_USER',
  FETCH_USER_POST_DATA: 'FETCH_USER_POST_DATA',
  SET_USER_POST_DATA: 'SET_USER_POST_DATA',
  GET_ASYNC_USER_POST_DATA: 'GET_ASYNC_USER_POST_DATA',
  SET_SIGN_IN: 'SET_SIGN_IN',
  POST_SIGN_IN_DATA: 'POST_SIGN_IN_DATA',
  SET_SIGN_UP: 'SET_SIGN_UP',
  POST_SIGN_UP_DATA: 'POST_SIGN_UP_DATA',
  SET_SIGN_OUT: 'SET_SIGN_OUT',
  POST_SIGN_OUT_REQUEST: 'POST_SIGN_OUT_REQUEST',
};

const getAsyncCurrentUser = () => {
  return {
    type: userTypes.GET_ASYNC_CURRENT_USER,
  };
};

const getAsyncUserPostsData = (id) => {
  return {
    id: id,
    type: userTypes.GET_ASYNC_USER_POST_DATA,
  };
};

const postAsyncSignIn = (params) => {
  return {
    payload: {
      ...params,
    },
    type: userTypes.POST_SIGN_IN_DATA,
  };
};

const postAsyncSignUp = (params) => {
  return {
    type: userTypes.POST_SIGN_UP_DATA,
    payload: {
      ...params,
    },
  };
};

const postAsyncSignOut = () => {
  return {
    type: userTypes.POST_SIGN_OUT_REQUEST,
  };
};

export default {
  getAsyncCurrentUser,
  getAsyncUserPostsData,
  postAsyncSignIn,
  postAsyncSignUp,
  postAsyncSignOut,
};
