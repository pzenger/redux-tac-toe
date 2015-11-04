// Action type
export const MOVE = 'MOVE';
export const RESET = 'RESET';

export function move(position) {
  return { type: MOVE, position };
}


export function reset() {
  return {type: RESET};
}
