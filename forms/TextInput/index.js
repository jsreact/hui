"use strict";

var React            = require('react');
var cx               = require('react/lib/cx');
var InputErrors      = require('../InputErrors');
var placeholderMixin = require('../../mixins/placeholderMixin');
var nextId           = 0;

module.exports = React.createClass({
  displayName: 'hui-TextInput',
  mixins: [placeholderMixin],

  propTypes: {
    id: React.PropTypes.string,
    errors: React.PropTypes.array,
    placeholder: React.PropTypes.string,
    readOnly: React.PropTypes.bool,
    hasCounter: React.PropTypes.bool,
    maxLength: React.PropTypes.number,
    type: React.PropTypes.string,
    className: React.PropTypes.string,
    autoComplete: React.PropTypes.string,
    value: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    onBlur: React.PropTypes.func,
    onChange: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      errors: null,
      id: ['text-input', ++nextId].join('-'),
      placeholder: null,
      readOnly: false,
      type: 'text',
      value: '',
      hasCounter: false,
      autoComplete: 'off'
    };
  },

  focus: function() {
    this.refs.input.getDOMNode().focus();
  },

  blur: function() {
    this.refs.input.getDOMNode().blur();
  },

  render: function() {
    var props = this.props;

    var classes = {
      "hui-TextInput": true,
      "hui-TextInput--error": this.hasErrors(),
      "hui-TextInput--readOnly": this.props.readOnly
    };

    classes[props.className] = true;

    return (
      <span className={ cx(classes) }>
        { this.renderPlaceholder() }
        { this.renderInput() }
        { this.renderCounter() }
        <InputErrors errors={ props.errors } />
      </span>
    );
  },

  renderCounter: function() {
    var props      = this.props;
    var hasCounter = props.hasCounter;
    var maxLength  = props.maxLength;
    var value, number, classes;

    if (hasCounter) {
      value = props.value;
      if (value && typeof(value) === 'string') {
        number = maxLength - value.length;
      } else {
        number = maxLength;
      }

      classes = cx({
        "hui-TextInput--counter": true,
        "hui-TextInput--counter--warning": number <= 5
      });

      return (
        <p className={ classes }>{ number }</p>
      );
    } else {
      return null;
    }
  },

  renderInput: function() {
    var props = this.props;
    var className = props.className;
    var classes = {
      "hui-TextInput__input": true,
      "hui-TextInput__input--shrink": this.props.hasCounter
    };

    if (className) {
      classes[className] = true;
    }

    return (
      <input
        {...props}
        autoComplete="off"
        className={ cx(classes) }
        placeholder=""
        ref="input"
        maxLength="10000" />
    );
  },

  hasErrors: function() {
    var errors = this.props.errors;
    return errors && errors.length > 0;
  }
});
