import React, {Component, PropTypes} from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <button onClick={() => this.handleClick()}>Reset</button>
      </div>
    );
  }
  handleClick() {
    this.props.onResetClick();
  }
}

export default Footer;
