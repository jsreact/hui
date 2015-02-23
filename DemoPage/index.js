/** @jsx React.DOM */
"use strict";

var React                = require('react');
var TopBar               = require('../layout/TopBar');
var TopBarLink           = require('../layout/TopBarLink');
var Masthead             = require('../layout/Masthead');
var Highlight            = require('react-highlight');
var pkg                  = require('../package');
var imagePath            = '/images-' + pkg.version + '/';
var TopBarExample        = require('./TopBarExample');
var LineGraphExample     = require('./LineGraphExample');
var LegendExample        = require('./LegendExample');
var VisualisationExample = require('./DataVisualisationExample');
var TextInputExample     = require('./TextInputExample');

module.exports = React.createClass({
  displayName: 'DemoPage',

  render: function() {
    return (
      <div className="DemoPage">
        <TopBar>
          <Masthead
            appName={ "HUI (◠‿◠)" }
            href="/"
            imagePath={ imagePath } />
            <TopBarLink href="#how-to-use">
              How to use
            </TopBarLink>
            <TopBarLink href="#examples">
              HUI examples
            </TopBarLink>
        </TopBar>
        <div className="DemoPage__content">
          <h2 className="DemoPage__h2" id="how-to-use">How to use HUI</h2>
          <p className="DemoPage__p">HUI can be used in two ways depending on the use case</p>

          <h3 className="DemoPage__h3">CDN</h3>
          <Highlight className='bash'>
            { "//d1ig6folwd6a9s.cloudfront.net/hui/hui-" + pkg.version + ".css" }
          </Highlight>
          <Highlight className='bash'>
            { "//d1ig6folwd6a9s.cloudfront.net/hui/hui-" + pkg.version + ".js" }
          </Highlight>

          <h3 className="DemoPage__h3">Install with npm (Optional version. SSH key rquired.)</h3>
          <Highlight className='bash'>
            { "npm install git+ssh://git@github.com:everydayhero/ui-library.git#" + pkg.version }
          </Highlight>

          <h2 className="DemoPage__h2" id="examples">Examples</h2>

          <TopBarExample/>
          <LineGraphExample/>
          <LegendExample />
          <VisualisationExample />
          <TextInputExample />
        </div>
      </div>
    );
  }
});
