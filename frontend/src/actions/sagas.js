import { put, takeLatest, all } from 'redux-saga/effects';
import client from '../lib/api/client';

const runOurAction = function* () {
  let remoteData;
  yield client.get('/posts').then((resp) => {
    remoteData = resp.data;
  });
  yield put({ type: 'SET_DATA', payload: remoteData });
};
function* getAsyncListDataWatcher() {
  yield takeLatest('GET_ASYNC_LIST_DATA', runOurAction);
}

export default function* rootSaga() {
  yield all([getAsyncListDataWatcher()]);
}
