'use strict';

var DistractionsPage = require('../../src/js/pages/distractionsPage.js'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('distractions', function() {

  var distractionsPage;

  beforeEach(function() {
    distractionsPage = new DistractionsPage();
  });

  describe('button event handlers', function() {

    beforeEach(function() {
      distractionsPage.setButtonEvents();
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
      distractionsPage.render();
      var html = distractionsPage.$el.html();
      expect(html).toContainText('Distractions');
    });

    it('returns the view object', function() {
      expect(distractionsPage.render()).toEqual(distractionsPage);
    });

  });

});
