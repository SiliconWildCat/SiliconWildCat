import {
  configureStore,
  getDefaultMiddleware,
  EnhancedStore,
} from '@reduxjs/toolkit';
import rootReducer, { rootSaga } from './modules';
import { createWrapper, MakeStore } from 'next-redux-wrapper';
import createSagaMiddleware, { Task } from 'redux-saga';
import { Store } from 'redux';
import withReduxSaga from 'next-redux-saga';

interface SagaStore extends Store {
  sagaTask?: Task;
}
let myStore;
const store = () => {
  const devMode = process.env.NODE_ENV === 'development'; // 개발모드
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
    devTools: devMode,
  });
  myStore = store;
  // Next Redux Toolkit 에서 saga를 사용해야할 때
  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

const wrapper = createWrapper(store, {
  // 이 부분이 true면 디버그때 자세한 설명이 나옵니다. (개발할때는 true로)
  debug: process.env.NODE_ENV === 'development',
});
export type RootState = ReturnType<typeof store>;
export type AppDispatch = typeof myStore.dispatch;
export default wrapper;
