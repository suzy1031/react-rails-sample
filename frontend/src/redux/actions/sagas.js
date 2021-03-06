import {
  put,
  takeEvery,
  all,
  call,
  take,
  takeLatest,
} from 'redux-saga/effects';
// api
import {
  getList,
  getDetail,
  deletePost,
  createPost,
  updatePost,
} from '../../lib/api/post';
import { getCurrentUser, signIn, signUp, signOut } from '../../lib/api/auth';
import { getUserPosts } from '../../lib/api/user';
import { Types } from './postActions';
import { userTypes } from './userActions';

// redux-sagaには非同期処理を行う上で使用する関数

// 1. takeEvery(actionがdispatchされる度に監視させたい処理)
// 例) APIからデータのリストを取得するとき

// 2. takeLatest(actionが複数回dispatchされる可能性があるとき、現在実行中の最新のsagaのみを取得する処理)
// 例) レコードの作成または更新
// 例) 同時に複数のコンポーネントから同じAPIエンドポイントを参照するとき

// 3. take(実行中のsagaが完了するまで、そのactionがdispatchされるタイミングを監視するとき)
// 例) ユーザーの削除
// 例) 進行中の処理が完了するのを待ってから、別の処理を行うとき

// 4. call(関数またはPromiseを呼び出すとき、その関数またはPromiseの実行が完了するのを待ってから次のコード行を実行するとき / Promiseの完了を待つ)

// 5. put(actionをdispatchするとき)
// 例) APIから受け取ったdataで更新するとき
// 例) error処理を行うとき

// サインアウト
const runSignOut = function* () {
  const result = yield call(signOut);
  console.log('saga result', result.data.success);
  yield put({
    type: userTypes.SET_SIGN_OUT,
    payload: result,
    status: result.data.success,
  });
};

function* signOutWatcher() {
  yield takeEvery(userTypes.POST_SIGN_OUT_REQUEST, runSignOut);
}

// サインイン
const runSignUp = function* ({ payload }) {
  const result = yield call(signUp, payload);
  yield put({
    type: userTypes.SET_SIGN_UP,
    payload: result,
    status: result.status,
    headers: result.headers,
  });
};

function* signUpWatcher() {
  yield takeEvery(userTypes.POST_SIGN_UP_DATA, runSignUp);
}

// ログイン
const runSignIn = function* ({ payload }) {
  const result = yield call(signIn, payload);
  yield put({
    type: userTypes.SET_SIGN_IN,
    payload: result,
    status: result.status,
    headers: result.headers,
  });
};

function* signInWatcher() {
  yield takeEvery(userTypes.POST_SIGN_IN_DATA, runSignIn);
}

// ログインユーザー情報
const runUserAction = function* () {
  yield put({
    type: userTypes.FETCH_USER_DATA,
  });
  const result = yield call(getCurrentUser);

  if (result) {
    yield put({
      type: userTypes.SET_USER_DATA,
      payload: result.data,
    });
  }
};
function* getAsyncUserDataWatcher() {
  yield takeEvery(userTypes.GET_ASYNC_CURRENT_USER, runUserAction);
}

// ユーザー投稿一覧
const runUserPostsAction = function* (arg) {
  const result = yield call(getUserPosts, arg.id);
  yield put({ type: userTypes.SET_USER_POST_DATA, payload: result.data });
};
function* getAsyncUserPostsDataWatcher() {
  yield takeEvery(userTypes.GET_ASYNC_USER_POST_DATA, runUserPostsAction);
}

// 一覧
// function* => generator関数(ECMAScript6)
// 戻り値 => iterator
const runListAction = function* () {
  const result = yield call(getList);
  yield put({ type: Types.SET_DATA, payload: result.data });
};
function* getAsyncListDataWatcher() {
  yield takeEvery(Types.GET_ASYNC_LIST_DATA, runListAction);
}

// 詳細
const runDetailAction = function* (arg) {
  // call(apiClient, argument)
  const result = yield call(getDetail, arg.id);
  yield put({ type: Types.SET_DETAIL_DATA, payload: result.data });
};
function* getAsyncDetailDataWatcher() {
  yield takeEvery(Types.GET_ASYNC_DETAIL_DATA, runDetailAction);
}

// 削除
function* deleteAsyncData({ id }) {
  yield call(deletePost, id);
}

function* deleteAsyncDataWatcher() {
  const action = yield take(Types.DELETE_ASYNC_DATA);
  yield call(deleteAsyncData, {
    id: action.payload.id,
  });
}

// 新規作成
function* createAsyncData({ payload }) {
  yield call(createPost, payload);
  const result = yield call(getList);
  yield put({ type: Types.SET_DATA, payload: result.data });
}

function* postAsyncData() {
  yield takeLatest(Types.POST_ASYNC_DATA, createAsyncData);
}

// 更新
function* updateAsyncData({ id, payload }) {
  yield call(updatePost, id, payload);
  const result = yield call(getList);
  yield put({ type: Types.SET_DATA, payload: result.data });
}

function* patchAsyncData() {
  yield takeLatest(Types.PATCH_ASYNC_DATA, updateAsyncData);
}

// rootSagaでsagaの処理を配列で管理する
// allはPromiseAllと同様の処理
export default function* rootSaga() {
  yield all([
    signInWatcher(),
    getAsyncUserDataWatcher(),
    getAsyncUserPostsDataWatcher(),
    getAsyncListDataWatcher(),
    getAsyncDetailDataWatcher(),
    deleteAsyncDataWatcher(),
    postAsyncData(),
    patchAsyncData(),
    signUpWatcher(),
    signOutWatcher(),
  ]);
}
