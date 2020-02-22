// import { createReducer } from '@reduxjs/toolkit';

import { combineReducers } from 'redux';
import { SUBMIT_FORM_DATA } from '../Actions/actions';

const initState = {
  name: { first: '', last: '' },
  address: { addressOne: '', addressTwo: '' }
};

// const stepOneReducer = createReducer(initState, {
//   SUBMIT_FORM_DATA: (state, action) => {
//     console.log('hello', state.name.first);
//     state.name.first = action.name.first;
//     state.name.last = action.name.last;
//     state.name.adressOne = action.name.adressOne;
//     state.name.addressTwo = action.name.addressTwo;
//   }
// });

function stepOne(state = initState, action) {
  switch (action.type) {
    case SUBMIT_FORM_DATA:
      console.log('hello from stepOne reducer!', action.data);
      return action.data;
    default:
      return initState;
  }
}

const rootReducer = combineReducers({
  stepOne
});

export default rootReducer;
