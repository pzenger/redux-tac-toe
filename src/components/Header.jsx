import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Header extends Component {
  render() {
    let previewClass = classNames('preview', this.props.turn);
    return (
      <div className="Header">
        <h4><span className={previewClass}>&nbsp; </span></h4>
      </div>
    );
  }
}

Header.propTypes = {
  turn: PropTypes.string.isRequired
};

export default Header;
