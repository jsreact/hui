"use strict";

var React     = require('react');
var TextArea  = require('../../../forms/TextArea');
var Highlight = require('react-highlight');
var formMixin = require('../../../mixins/reactForm.mixin');

module.exports = React.createClass({
  displayName: 'TextAreaExample',
  mixins: [formMixin],

  t: function(name) {
    var translation = {
      food_menu_label: 'Food Menu:',
      description_label: 'Description:'
    };

    return (translation[name]);
  },

  render: function() {
    var change = this.inputChangeEventFn;

    return (
    <div>
      <h3>TextArea</h3>
      <p>Basic text area.</p>
      <h4>TextArea propTypes</h4>
      <ul>
        <li>errors:</li>
        <li>id:</li>
        <li>value:</li>
        <li>className:</li>
        <li>onChange:</li>
      </ul>
        <TextArea
          className="Your-TextArea"
          id="description"
          label="With hint"
          value={ this.state.form.description }
          onChange={ change('description') }
          hint="Tell me a story."
          errors={ this.props.errors }/>

       <TextArea
          className="Your-TextArea"
          id="description"
          value={ this.state.form.description_02 }
          onChange={ change('description_02') }
          required={ true }
          label="Error message and required"
          errorMessage="You need to do this thing."
          errors={ ["You should attend a marketing writing course."] }/>

      <h4>React Example</h4>
      <Highlight className='html'>
        { '{ this.textArea("food_menu") }\n' }
        { '<TextArea\n' }
        { '  className="Your-TextArea"\n' }
        { '  id="description"\n' }
        { '  value={ this.state.form.description }\n' }
        { "  onChange={ change('description') }\n" }
        { '  errors={ this.props.errors }/>\n' }
      </Highlight>
    </div>
    );
  }
});
