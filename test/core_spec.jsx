import {List , Map, fromJS} from 'immutable';
import {expect} from 'chai';

import {move, reset, INITIAL_STATE} from '../src/core';

describe('application logic', () => {
  describe('move', () => {
    it('makes a move', () => {
      const initialState = fromJS({
        board: [[0,0,0]],
        turn: 'x'
      });
      const nextState = move(initialState, {x:0, y:1});

      expect(nextState).to.equal(fromJS({
        board:[[0,"x",0]],
        turn: 'o'
      }));

    });

    it('does not overwrite old moves', () => {
      const initialState = fromJS({
        board: [['o', 0]],
        turn: 'x'
      });
      const nextState = move(initialState, {x:0, y:0});

      expect(nextState).to.equal(fromJS({
        board: [['o', 0]],
        turn: 'x'
      }));

    });

    it('changes turn on a successful move', () => {
      const initialState = fromJS({
        board: [[0, 0]],
        turn: 'x'
      });
      const nextState = move(initialState, {x:0, y:0});

      expect(nextState).to.equal(fromJS({
        board: [['x', 0]],
        turn: 'o'
      }));
    });


  it('win condition - horizontal', () => {
    const initialState = fromJS({
      board:[[0,0,0],['x','x',0], [0,0,0]],
      turn: 'x'
    });
    const nextState = move(initialState, {x:1, y:2});

    expect(nextState).to.equal(fromJS({
      board:[[0,0,0],['x','x','x'],[0,0,0]],
      turn: 'x',
      winner: 'x'
    }));
  });

  it('win condition - vertical', () => {
    const initialState = fromJS({
      board:[[0,'x',0],[0,'x',0], [0,0,0]],
      turn: 'x'
    });
    const nextState = move(initialState, {x:2, y:1});

    expect(nextState).to.equal(fromJS({
      board:[[0,'x',0],[0,'x',0],[0,'x',0]],
      turn: 'x',
      winner: 'x'
    }));
  });

  it('win condition - diagonal', () => {
    const initialState = fromJS({
      board:[['x',0,0],[0,'x',0], [0,0,0]],
      turn: 'x'
    });
    const nextState = move(initialState, {x:2, y:2});

    expect(nextState).to.equal(fromJS({
      board:[['x',0,0],[0,'x',0],[0,0,'x']],
      turn: 'x',
      winner: 'x'
    }));

  });

  it('sets draw once the board is full and there is no win', () => {
    const initialState = fromJS({
      board: [['x','o','x'],['x','o','x'],['o','x',0]],
      turn: 'o'
    });
    const nextState = move(initialState, {x:2, y:2});

    expect(nextState).to.equal(fromJS({
      board: [['x','o','x'],['x','o','x'],['o','x','o']],
      turn: 'x',
      draw: true
    }));
  });

});

  describe('reset', () => {
    it('resets board to INTITIAL_STATE', () => {
      const initialState = fromJS({
        do: 'not',
        matter: 'matter'
      });
      const nextState = reset(initialState);

      expect(nextState).to.equal(INITIAL_STATE);
    });
  });
});
