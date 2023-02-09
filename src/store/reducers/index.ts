import { combineReducers } from 'redux';
import { todoReducer } from './todoReducer';
import { modalReducer } from './modalReducer';

export const rootReducer = combineReducers({
  todo: todoReducer,
  modal: modalReducer,
})