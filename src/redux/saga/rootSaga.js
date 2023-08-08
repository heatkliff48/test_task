import { all } from 'redux-saga/effects';
import programmsWatcher from './programmsSaga';
export default function* rootSaga() {
  yield all([programmsWatcher()]);
}
