import { Map, List, fromJS, is} from 'immutable';

export const INITIAL_STATE = fromJS({
  board: [
    [0,0,0],
    [0,0,0],
    [0,0,0]
  ],
  turn: 'x',
  winner: null,
  draw: false
});

export function move(state, position) {
  const board = state.get('board');
  const turn = state.get('turn');
  const winner = state.get('winner');
  const draw = state.get('draw');

  if(winner || draw) {
    return state;
  }

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

    let draw = checkDraw(newBoard);
    if(draw){
      return state.merge({
        board: newBoard,
        turn: turn === 'x' ? 'o': 'x',
        draw: true
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

function checkDraw(board) {
  return board.every(row => {
    return row.every(col => {
      return col !== 0;
    });
  });

}
