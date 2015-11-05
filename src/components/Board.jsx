import React, { Component, PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Cell from './Cell';

class Board extends Component {
  render() {
    return (
        <div className="Board">
        {this.props.board.map((row, x) =>
          row.map((col, y) =>
              <Cell value={String(col)} position={{x,y}} onCellClick={this.props.onCellClick} />
            ))}
      </div>
    );
  }
}

Board.propTypes = {
  onCellClick: PropTypes.func.isRequired,
  board: ImmutablePropTypes.listOf(ImmutablePropTypes.listOf(PropTypes.any).isRequired).isRequired
};


export default Board;
