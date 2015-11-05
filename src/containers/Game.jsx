import React, { Component, PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { move, reset } from '../actions';

import Header from '../components/Header';
import Board from '../components/Board';
import Footer from '../components/Footer';
import Winner from '../components/Winner';
import Draw from '../components/Draw';

export class Game extends Component {
  render() {
    // Injected by connect() call
    const { dispatch, board, turn} = this.props;
    return (
      <div className="App">
        <Header
          turn={turn} />
        {this.props.winner ?
          <Winner ref="winner" winner={this.props.winner} /> : null}
        {this.props.draw ?
          <Draw /> : null }
          <Board
            board={board}
            onCellClick={(x,y) =>
              dispatch(move({x, y}))
            } />

        <Footer onResetClick={() =>
            dispatch(reset())
          } />
      </div>
    );
  }
}

Game.propTypes = {
  turn: PropTypes.oneOf([
    'o',
    'x'
  ]).isRequired,
  board: ImmutablePropTypes.listOf(ImmutablePropTypes.listOf(PropTypes.any).isRequired).isRequired,
  winner: PropTypes.oneOf([
    'o',
    'x'
  ])
};

// or select
function mapStateToProps(state) {
  console.log('STATE');
  console.log(state);
  return {
    turn: state.reducer.get('turn'),
    board: state.reducer.get('board'),
    winner: state.reducer.get('winner'),
    draw: state.reducer.get('draw')
  };
}

console.log('Game connect');
export const GameContainer = connect(mapStateToProps)(Game);
