import { combineReducers } from 'redux';
import { MOVE, RESET } from './actions';
import { move, reset, INITIAL_STATE } from './core';


export function reducer(state=INITIAL_STATE, action) {
  switch(action.type) {
    case MOVE:
      return move(state, action.position);
    case RESET:
      return reset(state);
  }
  return state;
}


const tictactoeApp = combineReducers({
  reducer
});

export default tictactoeApp;
