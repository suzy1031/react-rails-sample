// redux
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import rootSaga from '../actions/sagas';

const initialState = {
  asyncListData: '',
  asyncDetailData: '',
};
// redux-sagaはreduxのmiddlewareになるのでcreateStoreに設定する
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
