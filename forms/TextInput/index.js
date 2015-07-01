'use strict';

var React             = require('react/addons');
var LocalStorageMixin = require('../../mixins/localStorage');
var inputMessage      = require('../../mixins/inputMessage');
var textInput         = require('../../mixins/textInput');
var classnames        = require('classnames');
var classNamesArray   = require('../../lib/classNamesArray');

module.exports = React.createClass({
  displayName: 'TextInput',

  mixins: [LocalStorageMixin, inputMessage, textInput],

  propTypes: {
    autoComplete: React.PropTypes.bool,
    storeLocally: React.PropTypes.bool,
    autoFocus: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    hasError: React.PropTypes.bool,
    showError: React.PropTypes.bool,
    name: React.PropTypes.string,
    label: React.PropTypes.string,
    placeHolder: React.PropTypes.string,
    errors: React.PropTypes.array,
    errorMessage: React.PropTypes.string,
    hint: React.PropTypes.string,
    icon: React.PropTypes.string,
    iconPosition: React.PropTypes.string,
    mask: React.PropTypes.func,
    onFocus: React.PropTypes.func,
    onChange: React.PropTypes.func,
    validate: React.PropTypes.func,
    onError: React.PropTypes.func,
    onBlur: React.PropTypes.func,
    onTab: React.PropTypes.func,
    readOnly: React.PropTypes.bool,
    required: React.PropTypes.bool,
    showIcon: React.PropTypes.bool,
    spacing: React.PropTypes.string,
    type: React.PropTypes.string,
    value: React.PropTypes.string,
    layout: React.PropTypes.string,
    onIconClick: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      autoComplete: true,
      storeLocally: false,
      autoFocus: false,
      disabled: false,
      showError: false,
      icon: null,
      iconPosition: 'right',
      initialise: null,
      mask: null,
      onFocus: null,
      onChange: null,
      validate: null,
      onError: null,
      onBlur: function() {},
      onTab: function() {},
      onIconClick: null,
      readOnly: false,
      required: false,
      showIcon: true,
      name: null,
      id: null,
      label: 'Input',
      errors: [],
      errorMessage: '',
      hint: '',
      type: 'text',
      value: '',
      layout: 'full',
      spacing: 'loose'
    };
  },

  getInitialState: function() {
    return {
      hasError: false,
      focused: false,
      valid: false,
      waiting: false
    };
  },

  render: function() {
    var props = this.props;
    var state = this.state;
    var errors = props.errors || [];
    var valueType = typeof props.value;
    var value = (valueType === 'string' || valueType === 'number') ? props.value.toString() : '';
    var hasServerErrors = errors.length;
    var iconsLeft = (props.iconPosition === 'left');
    var classes = classNamesArray([
      'hui-TextInput--' + props.layout,
      'hui-TextInput--' + props.spacing,
      'hui-TextInput',
      !!value && !!value.trim() && 'hui-TextInput--hasValue',
      state.focused && 'hui-TextInput--focused',
      state.valid && 'hui-TextInput--valid',
      this.shouldShowError() && 'hui-TextInput--error',
      props.disabled && 'hui-TextInput--disabled'
    ]);

    var inputClassName = classnames({
      'hui-TextInput__input--icon-left': iconsLeft,
      'hui-TextInput__input--icon': !iconsLeft,
      'hui-TextInput__input': true
    });

    return (
      <div className={ classes }>
        <label className="hui-TextInput__label" htmlFor={ props.name } ref={ props.ref }>
          { props.label }
          <input { ...this.inputMethods(!props.disabled) }
            autoComplete={ props.autoComplete ? 'on' : 'off' }
            className={ inputClassName }
            disabled={ props.disabled }
            id={ props.id || props.name }
            name={ props.name }
            ref="input"
            onKeyDown={ this.onTab }
            type={ props.type }
            value={ this.maskValue(value) } />
          { this.renderPlaceHolder() }
          { this.renderIcon() }
        </label>
        { this.renderMessage(props.errorMessage || hasServerErrors || props.hint) }
      </div>
    );
  }
});
