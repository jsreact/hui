/** @jsx React.DOM */
"use strict";

var React     = require('react');
var Highlight = require('react-highlight');
var Legend    = require('../../graphs/DataVisualisation/Legend');

module.exports = React.createClass({
  displayName: 'LegendExample',

  getInitialState: function() {
    return {
    };
  },

  render: function() {
    if (this.state.hide) {
      return false;
    }

    return (
      <div>
        <h3>Legend</h3>
        <div className="DemoPage__example--legend">
          <Legend titles={[ 'Campaign 1', 'Campaign 2', 'Campaign 3' ]} />
        </div>

        <h4>React Example</h4>
        <Highlight className='html'>
          { '<Legend titles={[ \'Campaign 1\', \'Campaign 2\', \'Campaign 3\' ]} />' }
        </Highlight>
      </div>
    );
  }
});
