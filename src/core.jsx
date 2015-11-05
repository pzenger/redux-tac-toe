import { Map, List, fromJS, is} from 'immutable';

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
  const winner = state.get('winner');

  if(winner){
    return state;
  }

  const col = board.get(position.x);

  if(board.get(position.x).get(position.y) === 0){
    const newBoard = board.setIn([position.x, position.y], turn);

    let win = checkWin(newBoard, turn);
    if(win){
      return state.merge({
        board: newBoard,
        turn: turn,
        winner: turn
      });
    }
    return state.merge({
      board: newBoard,
      turn: turn === 'x' ? 'o': 'x'
    });
  }
  return state;
}

export function reset(state) {
  return INITIAL_STATE;
}

function checkWin(board, turn) {
  
  const winningPoints = [
    [{x:0,y:0},{x:1,y:0},{x:2,y:0}],
    [{x:0,y:1},{x:1,y:1},{x:2,y:1}],
    [{x:0,y:2},{x:1,y:2},{x:2,y:2}],
    [{x:0,y:0},{x:0,y:1},{x:0,y:2}],
    [{x:1,y:0},{x:1,y:1},{x:1,y:2}],
    [{x:2,y:0},{x:2,y:1},{x:2,y:2}],
    [{x:0,y:0},{x:1,y:1},{x:2,y:2}],
    [{x:2,y:0},{x:1,y:1},{x:0,y:2}],
  ];

  let winPost = winningPoints.map((pointSet) => {
    return pointSet.every((point)  => {
        return board.getIn([point.x,point.y]) === turn;
    });
  }).indexOf(true);

  return winPost >= 0;
}
