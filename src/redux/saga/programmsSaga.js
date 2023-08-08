import { put, call, takeLatest } from 'redux-saga/effects';
import { GET_STUDY_PROGRAMM, SET_STUDY_PROGRAMM } from '../types';
import axios from 'axios';

const getProgramms = () => {
  return axios('https://api.moscow.mba/products').then((res) => res.data);
};

function* programmsWorker(action) {
  try {
    const programm = yield call(getProgramms);
    yield put({ type: SET_STUDY_PROGRAMM, payload: programm });
  } catch (err) {
    yield put({ type: SET_STUDY_PROGRAMM, payload: [{ name: 'ERROR' }] });
  }
}

function* programmsWatcher() {
  yield takeLatest(GET_STUDY_PROGRAMM, programmsWorker);
}
export default programmsWatcher;
