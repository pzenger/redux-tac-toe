import React, {Component, PropTypes} from 'react';

class Winner extends Component {
  render() {
    return (
      <div className="Winner">
        <h1>{this.props.winner} wins</h1>
    </div>
    );
  }
}

Winner.propTypes = {
  winner: PropTypes.oneOf([
    'x',
    'o'
  ]).isRequired
};

export default Winner;
