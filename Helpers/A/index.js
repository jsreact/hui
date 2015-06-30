"use strict";

var React = require('react');

module.exports = React.createClass({
  displayName: 'A',

  propTypes: {
    href: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func
  },

  handleClick: function(e) {
    this.track();
    this.props.onClick(e);
  },

  render: function() {
    return (
      <a href={ this.props.href } className={ 'hui-A ' + this.props.className } onMouseUp={ this.handleClick } onTouchStart={ this.handleClick }>
        { this.props.children }
      </a>
    );
  }
});
