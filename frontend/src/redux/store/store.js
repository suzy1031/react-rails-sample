// redux
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import rootSaga from '../actions/sagas';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  asyncListData: '',
  asyncDetailData: '',
  asyncCurrentUser: '',
  asyncUserPostsData: '',
  asyncSignIn: '',
};
// redux-sagaはreduxのmiddlewareになるのでcreateStoreに設定する
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
