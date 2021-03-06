'use strict'

import SocialMediaLinks from '../'
var testLinks = [
  { name: 'faceSpace', url: 'www.facespace.com' },
  { name: 'instaUnfriend', url: 'www.instaunfriend.com' },
  { name: 'twitBook', url: 'www.twitbook.com' }
];

describe('SocialMediaLinks', function() {
  var element;

  before(function() {
    element = TestUtils.renderIntoDocument(<SocialMediaLinks links={ testLinks } className="testClass" linkClass="testLinkClass"/>);
  });

  it('renders', function() {
    element.should.exist;
  });

  it('accepts a custom className', function() {
    findByClass(element, 'testClass').should.exist;
  });

  it('accepts custom linkClass', function() {
    scryByClass(element, 'testLinkClass').length.should.equal(3);
  });

  it('shows social media links', function() {
    findByAttribute(element, 'href', testLinks[0].url).should.exist;
    findByAttribute(element, 'href', testLinks[1].url).should.exist;
    findByAttribute(element, 'href', testLinks[2].url).should.exist;
  });

  it('shows social media icons', function() {
    findByClass(element, testLinks[0].name).should.exist;
    findByClass(element, testLinks[1].name).should.exist;
    findByClass(element, testLinks[2].name).should.exist;
  });
});

