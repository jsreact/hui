'use strict';

var Fieldset    = require('../');

describe('Fieldset', function() {
  describe('defaults', function() {
    var element = renderIntoDocument(<Fieldset/>);

    it('it renders a Fieldset', function() {
      findByClass(element, 'Fieldset');
    });

    it('does not render a legend', function() {
      var legends = scryByClass(element, 'hui-Fieldset__legend');

      legends.length.should.equal(0);
    });
  });

  describe('legend', function() {
    var element = renderIntoDocument(<Fieldset legend="foo"/>);

    it('does render a legend', function() {
      var label = findByClass(element, 'hui-Fieldset__legend');

      label.getDOMNode().textContent.should.equal('foo');
    });
  });
});
