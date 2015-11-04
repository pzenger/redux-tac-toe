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
        board: [['o']],
        turn: 'x'
      });
      const nextState = move(initialState, {x:0, y:0});

      expect(nextState).to.equal(fromJS({
        board: [['o']],
        turn: 'x'
      }));

    });

    it('changes turn on a successful move', () => {
      const initialState = fromJS({
        board: [[0]],
        turn: 'x'
      });
      const nextState = move(initialState, {x:0, y:0});

      expect(nextState).to.equal(fromJS({
        board: [['x']],
        turn: 'o'
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
