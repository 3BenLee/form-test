import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// import { validate } from './validate';

export default function createReducer(extraReducerObjects = {}) {
  return combineReducers({
    form: formReducer
    // future reducers added here
  });
}
