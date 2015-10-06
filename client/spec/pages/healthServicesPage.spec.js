'use strict';

var HealthServicesPage = require('../../src/js/pages/healthServicesPage'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('healthServices', function() {

  var healthServicesPage;

  beforeEach(function() {
    healthServicesPage = new HealthServicesPage();
  });

  describe('initialize', function() {
    it('should create a collection', function() {
      expect(healthServicesPage.healthCentreLocations).toBeTruthy();
    });
  });

  describe('button event handlers', function() {

    beforeEach(function() {
      healthServicesPage.setButtonEvents();
    });

    describe('left', function() {
      it('should take you back', function() {
        spyOn(healthServicesPage, 'back');
        healthServicesPage.trigger('left');
        expect(healthServicesPage.back).toHaveBeenCalled();
      });

    });

    describe('face', function() {

      it('should take you to the home page', function() {
        spyOn(global.App, 'navigate');
        healthServicesPage.trigger('face');
        expect(global.App.navigate).toHaveBeenCalledWith('');
      });

    });

  });

  describe('rendering', function() {

    var healthCentres;

    it('should render each of the locations', function() {

      healthCentres = [{
      serviceName: 'Health Service A',
      contactNum: '0411111111',
      kmDist: '4km'
    },
    {
      serviceName: 'Health Service B',
      contactNum: '0422222222',
      kmDist: '6km'
    },
    {
      serviceName: 'Health Service C',
      contactNum: '0433333333',
      kmDist: '8km'
    }];

      var html = healthServicesPage.$el.html();
      healthServicesPage.healthCentreLocations.reset(healthCentres);
      healthServicesPage.render();
      expect(healthServicesPage.$el).toContainHtml('Health Service A -- 4km');
      expect(healthServicesPage.$el).toContainHtml('0411111111');
    });

    it('returns the view object', function() {
      expect(healthServicesPage.render()).toEqual(healthServicesPage);
    });

  });

});
