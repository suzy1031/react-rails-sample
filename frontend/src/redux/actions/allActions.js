export const Types = {
  SET_DATA: 'SET_DATA',
  SET_DETAIL_DATA: 'SET_DETAIL_DATA',
  SET_DELETE_DATA: 'SET_DELETE_DATA',
  GET_ASYNC_LIST_DATA: 'GET_ASYNC_LIST_DATA',
  GET_ASYNC_DETAIL_DATA: 'GET_ASYNC_DETAIL_DATA',
  DELETE_ASYNC_DATA: 'DELETE_ASYNC_DATA',
  POST_ASYNC_DATA: 'POST_ASYNC_DATA',
  PATCH_ASYNC_DATA: 'PATCH_ASYNC_DATA',
};

const getAsyncListData = () => {
  return {
    type: Types.GET_ASYNC_LIST_DATA,
  };
};

const getAsyncDetailData = (id) => {
  return {
    id: id,
    type: Types.GET_ASYNC_DETAIL_DATA,
  };
};

const deleteAsyncData = (id) => {
  return {
    type: Types.DELETE_ASYNC_DATA,
    payload: {
      id: id,
    },
  };
};

const postAsyncData = (params) => {
  return {
    type: Types.POST_ASYNC_DATA,
    payload: {
      ...params,
    },
  };
};

const patchAsyncData = (id, params) => {
  return {
    type: Types.PATCH_ASYNC_DATA,
    id: id,
    payload: {
      ...params,
    },
  };
};

export default {
  getAsyncListData,
  getAsyncDetailData,
  deleteAsyncData,
  postAsyncData,
  patchAsyncData,
};
