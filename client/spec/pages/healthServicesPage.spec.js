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
        serviceName: 'Name A',
        contactNum: '111',
        kmDist: '1'
      }/*,
      {
        serviceName: 'Name B',
        contactNum: '222',
        kmDist: '2'
      },
      {
        serviceName: 'Name C',
        contactNum: '333',
        kmDist: '3'
      */];

      var html = healthServicesPage.$el.html();
      healthServicesPage.healthCentreLocations.reset(healthCentres);
      healthServicesPage.render();
      expect(healthServicesPage.$el).toContainHtml('Name A -- 1');
      expect(healthServicesPage.$el).toContainHtml('111');
    });

    it('returns the view object', function() {
      expect(healthServicesPage.render()).toEqual(healthServicesPage);
    });

  });

});
