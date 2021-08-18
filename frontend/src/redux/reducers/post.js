import { Types } from '../actions/allActions';

// 一覧
const asyncListData = (state = '', action) => {
  switch (action.type) {
    case Types.SET_DATA:
      return { ...state, payload: action.payload };
    default:
      return state;
  }
};

// 詳細
const asyncDetailData = (state = '', action) => {
  switch (action.type) {
    case Types.SET_DETAIL_DATA:
      return { ...state, payload: action.payload };
    default:
      return state;
  }
};
export { asyncListData, asyncDetailData };
