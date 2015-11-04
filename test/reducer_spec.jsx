import {fromJS} from 'immutable';
import {expect} from 'chai';

import reducers from '../src/reducers';
import {reducer} from '../src/reducers';
import {INITIAL_STATE} from '../src/core';

describe('reducer', () => {
  it('handles MOVE', () => {
    const initialState = fromJS({
      board:[[0]],
      turn: 'x'
    });
    const action = {type: 'MOVE', position: {x: 0, y: 0}};
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      board:[['x']],
      turn:'o'
    }));
  });

  it('handles RESET', () => {
    const initialState = fromJS({
      board:'do not matter'
    });
    const action = {type: 'RESET'};
    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(INITIAL_STATE);
  });
});
