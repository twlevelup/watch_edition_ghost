'use strict';
var SunPage = require('../../src/js/pages/sunPage'),
  Router = require('../../src/js/router.js'),
  App = require('../../src/js/app');
global.App = App;
describe('The sunPage', function() {
  var sunPage;
  beforeEach(function() {
      sunPage = new SunPage();
    });

  describe('rendering', function() {
    it('returns the view object', function() {
      expect(sunPage.render()).toEqual(sunPage);
    });

  });
});
