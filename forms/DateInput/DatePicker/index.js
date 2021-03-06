'use strict'

import React             from 'react'
import DatePickerPeriods from '../DatePickerPeriods'
import Calendar          from '../Calendar'

export default React.createClass({
  displayName: 'hui-DatePicker',

  propTypes: {
    onChange: React.PropTypes.func,
    onChangeSelection: React.PropTypes.func,
    className: React.PropTypes.string,
    date: React.PropTypes.object.isRequired
  },

  setYear: function(year) {
    var props = this.props;
    var date = props.date.year(year);

    if (props.onChangeSelection) { props.onChangeSelection(date); }
  },

  setMonth: function(month) {
    var props = this.props;
    var date = props.date.month(month);

    if (props.onChangeSelection) { props.onChangeSelection(date); }
  },

  render: function() {
    var props = this.props;
    var date = props.date;
    var classes = 'hui-DatePicker ' + props.className;

    return (
      <div className={ classes }>
        <DatePickerPeriods
          type="year"
          date={ date }
          current={ props.date.year() }
          onChange={ this.setYear } />

        <DatePickerPeriods
          type="month"
          date={ date }
          current={ props.date.month() }
          onChange={ this.setMonth } />

        <Calendar
          date={ date }
          month={ props.date.month() }
          year={ props.date.year() }
          onSelectDate={ this.props.onChange } />
      </div>
    );
  }
});
