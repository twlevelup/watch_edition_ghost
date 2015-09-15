'use strict';

var HealthservicesPage = require('../../src/js/pages/healthservicesPage.js'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('healthServices', function() {

  var healthservicesPage;

  beforeEach(function() {
    healthservicesPage = new HealthservicesPage();
  });

  describe('button event handlers', function() {

    beforeEach(function() {
      healthservicesPage.setButtonEvents();
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
      healthservicesPage.render();
      var html = healthservicesPage.$el.html();
      expect(html).toContainText('National Services');
      expect(html).toContainText('0488888888');
      expect(html).toContainText('10km');
    });

    it('returns the view object', function() {
      expect(healthservicesPage.render()).toEqual(healthservicesPage);
    });

    it('should display 3 health services names', function() {
      healthservicesPage.render();
      var html = healthservicesPage.$el.html();
      expect(html).toContainText('National Services');
      expect(html).toContainText('Echo Services');
      expect(html).toContainText('Help Me');
    });

    it('should display 3 health services contacts', function() {
      healthservicesPage.render();
      var html = healthservicesPage.$el.html();
      expect(html).toContainText('0488888888');
      expect(html).toContainText('0499999999');
      expect(html).toContainText('0477777777');
    });

    it('should display 3 health services distances', function() {
      healthservicesPage.render();
      var html = healthservicesPage.$el.html();
      expect(html).toContainText('10km');
      expect(html).toContainText('12km');
      expect(html).toContainText('11km');
    });

  });

});
