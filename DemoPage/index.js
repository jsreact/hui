"use strict";

var React           = require('react');
var TopBar          = require('../layout/TopBar');
var TopBarLink      = require('../layout/TopBarLink');
var Masthead        = require('../layout/Masthead');
var TopBarExample   = require('./examples/TopBar');
var PageFormExample = require('./examples/PageForm');
var DeltaArrow      = require('./examples/DeltaArrow');
var LineGraph       = require('./examples/LineGraph');
var Legend          = require('./examples/Legend');
var Visualisation   = require('./examples/DataVisualisation');
var TextInput       = require('./examples/TextInput');
var ReadOnlyAddress = require('./examples/ReadOnlyAddress');
var Checkbox        = require('./examples/Checkbox');
var TextArea        = require('./examples/TextArea');
var SelectInput     = require('./examples/SelectInput');
var UrlInput        = require('./examples/UrlInput');
var DateInput       = require('./examples/DateInput');
var DateSelect       = require('./examples/DateSelect');
var FileInput       = require('./examples/FileInput');
var ImageInput      = require('./examples/ImageInput');
var ButtonExample   = require('./examples/Button');
var imagePath       = './images/';
var FormRow         = require('./examples/FormRow');
var Fieldset        = require('./examples/Fieldset');
var LoadingProgress = require('./examples/LoadingProgress');

module.exports = React.createClass({
  displayName: 'DemoPage',

  render: function() {
    return (
      <div className="DemoPage">
        <TopBar fixed={ true }>
          <Masthead
            appName={ "HUI (◠‿◠)" }
            href="/"
            imagePath={ imagePath } />
            <TopBarLink href="#how-to-use">How to use</TopBarLink>
            <TopBarLink href="#layout">Layout</TopBarLink>
            <TopBarLink href="#buttons">Buttons</TopBarLink>
            <TopBarLink href="#graphs">Graphs</TopBarLink>
            <TopBarLink href="#forms">Forms</TopBarLink>
        </TopBar>
        <div className="DemoPage__content">
          <h2 className="DemoPage__h2" id="how-to-use">How To Use</h2>
          <p className="DemoPage__p">HUI documentation can be found on <a href="http://everydayhero.github.io/public-api-docs/hui">EDH docs</a></p>
          <h2 className="DemoPage__h2" id="layout">Layout</h2>
          <div className="DemoPage__group">
            <TopBarExample/>
            <LoadingProgress/>
            <PageFormExample/>
          </div>

          <h2 className="DemoPage__h2" id="buttons">Buttons</h2>
          <div className="DemoPage__group">
            <ButtonExample/>
          </div>

          <h2 className="DemoPage__h2" id="graphs">Graphs</h2>
          <div className="DemoPage__group">
            <Visualisation />
            <LineGraph/>
            <Legend />
            <DeltaArrow/>
          </div>

          <h2 className="DemoPage__h2" id="forms">Forms</h2>
          <div className="DemoPage__group">
            <TextInput />
            <ReadOnlyAddress />
            <Checkbox />
            <TextArea />
            <SelectInput />
            <UrlInput />
            <DateInput />
            <DateSelect />
            <FileInput />
            <ImageInput />
            <FormRow />
            <Fieldset />
          </div>
        </div>
      </div>
    );
  }
});
