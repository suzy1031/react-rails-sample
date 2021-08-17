export const Types = {
  GET_ASYNC_LIST_DATA: 'GET_ASYNC_LIST_DATA',
  GET_LIST_SUCCESS: 'GET_LIST_SUCCESS',
  GET_ASYNC_DETAIL_DATA: 'GET_ASYNC_DETAIL_DATA',
  GET_ERROR: 'GET_ERROR',
};

const getAsyncListData = () => {
  return {
    type: Types.GET_ASYNC_LIST_DATA,
  };
};

const getAsyncDetailData = (id) => {
  return {
    id: id,
    type: 'GET_ASYNC_DETAIL_DATA',
  };
};

export default { getAsyncListData, getAsyncDetailData };
