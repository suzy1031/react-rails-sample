export const userTypes = {
  FETCH_USER_DATA: 'FETCH_USER_DATA',
  SET_USER_DATA: 'SET_USER_DATA',
  GET_ASYNC_CURRENT_USER: 'GET_ASYNC_CURRENT_USER',
  FETCH_USER_POST_DATA: 'FETCH_USER_POST_DATA',
  SET_USER_POST_DATA: 'SET_USER_POST_DATA',
  GET_ASYNC_USER_POST_DATA: 'GET_ASYNC_USER_POST_DATA',
  SET_SIGN_IN: 'SET_SIGN_IN',
  POST_SIGN_IN_DATA: 'POST_SIGN_IN_DATA',
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

export default {
  getAsyncCurrentUser,
  getAsyncUserPostsData,
  postAsyncSignIn,
};
