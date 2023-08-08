import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { initState } from './initState';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './saga/rootSaga';
import { rootReducer } from './reduces/rootReduces';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  initState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
