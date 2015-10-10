'use strict';

var EmergencynumberpagePage = require('../../src/js/pages/emergencynumberpagePage.js'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('emergencyNumberPage', function() {

  var emergencynumberpagePage;

  beforeEach(function () {
    emergencynumberpagePage = new EmergencynumberpagePage();
  });

  describe('button event handlers', function () {

    beforeEach(function () {
      emergencynumberpagePage.setButtonEvents();
    });

    describe('left', function () {

      xit('should have tests');

    });

    describe('right', function () {

      xit('should have tests');

    });

    describe('top', function () {

      xit('should have tests');

    });

    describe('bottom', function () {

      xit('should have tests');

    });

    describe('face', function () {

      xit('should have tests');

    });

  });

  describe('rendering', function () {

    it('should produce the correct HTML', function () {
      emergencynumberpagePage.render();
      var html = emergencynumberpagePage.$el.html();
      expect(html).toContainText('emergencyNumberPage');
    });

    it('returns the view object', function() {
      expect(emergencynumberpagePage.render()).toEqual(emergencynumberpagePage);
    });

  });

});
