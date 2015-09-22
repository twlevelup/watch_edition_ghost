'use strict';

var HealthServicesPage = require('../../src/js/pages/healthServicesPage.js'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('healthServices', function() {

  var healthservicesPage;

  beforeEach(function() {
    healthServicesPage = new HealthServicesPage();
  });

  describe('button event handlers', function() {

    beforeEach(function() {
      healthServicesPage.setButtonEvents();
    });

    describe('left', function() {

      xit('should have tests');

    });

    describe('right', function() {

      xit('should have tests');

    });

    describe('top', function() {

      xit('should have tests');

    });

    describe('bottom', function() {

      xit('should have tests');

    });

    describe('face', function() {

      xit('should have tests');

    });

  });

  describe('rendering', function() {

    it('should produce the correct HTML', function() {
      healthServicesPage.render();
      var html = healthServicesPage.$el.html();
      expect(html).toContainText('National Services');
      expect(html).toContainText('0488888888');
      expect(html).toContainText('10km');
    });

    it('returns the view object', function() {
      expect(healthServicesPage.render()).toEqual(healthServicesPage);
    });

    it('should display 3 health services names', function() {
      healthServicesPage.render();
      var html = healthServicesPage.$el.html();
      expect(html).toContainText('National Services');
      expect(html).toContainText('Echo Services');
      expect(html).toContainText('Help Me');
    });

    it('should display 3 health services contacts', function() {
      healthServicesPage.render();
      var html = healthServicesPage.$el.html();
      expect(html).toContainText('0488888888');
      expect(html).toContainText('0499999999');
      expect(html).toContainText('0477777777');
    });

    it('should display 3 health services distances', function() {
      healthServicesPage.render();
      var html = healthServicesPage.$el.html();
      expect(html).toContainText('10km');
      expect(html).toContainText('12km');
      expect(html).toContainText('11km');
    });

  });

});
