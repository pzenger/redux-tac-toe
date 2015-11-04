import { Map, List, fromJS } from 'immutable';

export const INITIAL_STATE = fromJS({
  board: [
    [0,0,0],
    [0,0,0],
    [0,0,0]
  ],
  turn: 'x',
  winner: null
});

export function move(state, position) {
  const board = state.get('board');
  const turn = state.get('turn');

  const col = board.get(position.x);

  if(board.get(position.x).get(position.y) === 0){
    return state.merge({
      board: board.setIn([position.x, position.y], turn),
      turn: state.get('turn') === 'x' ? 'o': 'x'
    });
  }
  return state;
}

export function reset(state) {
  return INITIAL_STATE;
}
