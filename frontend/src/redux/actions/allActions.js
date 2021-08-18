export const Types = {
  SET_DATA: 'SET_DATA',
  SET_DETAIL_DATA: 'SET_DETAIL_DATA',
  GET_ASYNC_LIST_DATA: 'GET_ASYNC_LIST_DATA',
  GET_ASYNC_DETAIL_DATA: 'GET_ASYNC_DETAIL_DATA',
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

export default { getAsyncListData, getAsyncDetailData };
