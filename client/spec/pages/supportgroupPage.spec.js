'use strict';

var SupportgroupPage = require('../../src/js/pages/supportgroupPage.js'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('supportGroup', function() {

  var supportgroupPage;

  beforeEach(function () {
    supportgroupPage = new SupportgroupPage();
  });

  describe('initialize', function() {
    it('should create a collection', function() {
      expect(supportgroupPage.supportgroupLocations).toBeTruthy();
    });
  });

  describe('button event handlers', function () {

    beforeEach(function () {
      supportgroupPage.setButtonEvents();
    });

    describe('left', function() {
      it('should take you back', function() {
        spyOn(supportgroupPage, 'back');
        supportgroupPage.trigger('left');
        expect(supportgroupPage.back).toHaveBeenCalled();
      });

    });

     describe('face', function() {

      it('should take you to the home page', function() {
        spyOn(global.App, 'navigate');
        supportgroupPage.trigger('face');
        expect(global.App.navigate).toHaveBeenCalledWith('');
      });

    });

    describe('top', function() {

      it('should take you to the home page', function() {
        spyOn(global.App, 'navigate');
        supportgroupPage.trigger('top');
        expect(global.App.navigate).toHaveBeenCalledWith('');
      });

    });

    describe('bottom', function() {

      it('should take you to the home page', function() {
        spyOn(global.App, 'navigate');
        supportgroupPage.trigger('bottom');
        expect(global.App.navigate).toHaveBeenCalledWith('');
      });

    });

    describe('right', function() {

      it('should take you to the home page', function() {
        spyOn(global.App, 'navigate');
        supportgroupPage.trigger('right');
        expect(global.App.navigate).toHaveBeenCalledWith('');
      });

    });

  });

  describe('rendering', function () {

    var healthCentres;

    it('should render each of the locations', function() {

      healthCentres = [{
      serviceName: 'Support Group A',
      contactNum: '0411111111',
      kmDist: '4km'
    },
    {
      serviceName: 'Support Group B',
      contactNum: '0422222222',
      kmDist: '6km'
    },
    {
      serviceName: 'Support Group C',
      contactNum: '0433333333',
      kmDist: '8km'
    }];

      var html = supportgroupPage.$el.html();
      supportgroupPage.supportgroupLocations.reset(healthCentres);
      supportgroupPage.render();
      expect(supportgroupPage.$el).toContainHtml('Support Group A - 4km');
      expect(supportgroupPage.$el).toContainHtml('0411111111');
    });

    it('should produce the correct HTML', function () {
      supportgroupPage.render();
      var html = supportgroupPage.$el.html();
      expect(html).toContainText('AA Adelaide St');
    });

    it('returns the view object', function() {
      expect(supportgroupPage.render()).toEqual(supportgroupPage);
    });

  });

});
