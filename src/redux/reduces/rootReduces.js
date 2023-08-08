import { combineReducers } from 'redux';
import { programmsReducer } from './programmsReducer';
export const rootReducer = combineReducers({
  programms: programmsReducer,
});
