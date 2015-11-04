import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

class Cell extends Component {

  render(){

    console.log(typeof(this.props.value));

    let squareClass = classNames('Cell',{
      'empty': this.props.value === '0',
      'x': this.props.value === 'x',
      'o': this.props.value === 'o',
    });

    return (
      <div className={squareClass} onClick={() => this.handleClick()}></div>
    );
  }

  handleClick() {
    this.props.onCellClick(this.props.position.x, this.props.position.y);
  }
}

Cell.propTypes = {
  value: PropTypes.string.isRequired,
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
  onCellClick: PropTypes.func.isRequired
};

export default Cell;
