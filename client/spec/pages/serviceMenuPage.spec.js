'use strict';

var ServiceMenuPage = require('../../src/js/pages/serviceMenuPage.js'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('Services Menu', function() {

  var serviceMenuPage;

  beforeEach(function() {
    serviceMenuPage = new ServiceMenuPage();
    serviceMenuPage.render();
  });

  describe('Links', function() {

    it('Contains support groups', function() {
      expect(serviceMenuPage.$el.html()).toContainText('Support Groups');
    });

    it('Contains health services', function() {
      expect(serviceMenuPage.$el.html()).toContainText('Health Services');
    });

  });
});
