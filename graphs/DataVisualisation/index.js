'use strict';

var React   = require('react');
var Graph   = require('../LineGraph');
var DeltaArrow = require('../DeltaArrow');
var SingleNumber = require('./SingleNumber');
var Legend = require('./Legend');

module.exports = React.createClass({
  displayName: 'DataVisualisation',

  propTypes: {
    collection: React.PropTypes.array,
    collectionValueKey: React.PropTypes.string,
    valueConverter: React.PropTypes.func,
    stacked: React.PropTypes.bool,
    title: React.PropTypes.string.isRequired,
    period: React.PropTypes.string,
    total: React.PropTypes.number,
    totalFormat: React.PropTypes.string,
    legendKeys: React.PropTypes.arrayOf(React.PropTypes.string),
    delta: React.PropTypes.number,
    tipLabel: React.PropTypes.string,
    loading: React.PropTypes.bool,
    emptyState: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      stacked: true,
      valueConverter: function(number) {
        return number;
      },
      loading: false,
      emptyState: false
    };
  },

  renderGraph: function() {
    var props = this.props;

    if (props.collection) {
      return (
        <Graph
          stacked={ props.stacked }
          collection={ props.collection }
          collectionValueKey={ props.collectionValueKey }
          valueConverter={ props.valueConverter }
          totalFormat={ props.totalFormat }
          tipLabel={ props.tipLabel }
          loading={ props.loading }
          emptyState={ props.emptyState }/>
      );
    }
  },

  renderTotal: function() {
    var props          = this.props;
    var total          = props.total;
    var totalFormat    = props.totalFormat;
    var title          = props.title;
    var valueConverter = props.valueConverter;
    var loading        = props.loading;
    var emptyState     = props.emptyState;

    if (emptyState) {
      return (
        <SingleNumber title={ title } format={ totalFormat } value={ valueConverter(total) } emptyState={ emptyState }/>
      );
    }
    return (
      <SingleNumber title={ title } format={ totalFormat } value={ valueConverter(total) } loading={ loading }/>
    );
  },

  renderDeltaArrow: function() {
    var props      = this.props;
    var delta      = props.delta;
    var loading    = props.loading;
    var emptyState = props.emptyState;

    if (emptyState) {
      return <DeltaArrow delta={ delta } emptyState={ emptyState } />;
    }
    if (loading || delta) {
      return <DeltaArrow delta={ delta } loading={ loading } />;
    }
  },

  renderLegend: function() {
    var props      = this.props;
    var loading    = props.loading;
    var legendKeys = props.legendKeys;
    var emptyState = props.emptyState;

    if (loading || emptyState || !legendKeys) {
      return false;
    }

    return (
      <Legend keys={ legendKeys } />
    );
  },

  render: function() {
    return (
      <div className="hui-DataVisualisation">
        <h2 className="hui-DataVisualisation__title">{ this.props.title }</h2>
        <h5 className="hui-DataVisualisation__period">{ this.props.period }</h5>
        <div className="hui-DataVisualisation__valueGroup">
          { this.renderTotal() }
          { this.renderDeltaArrow() }
        </div>
        { this.renderGraph() }
        { this.renderLegend() }
      </div>
    );
  }
});
