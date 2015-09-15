'use strict';

var GhostPage = require('../../src/js/pages/ghostPage.js'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('ghost', function() {

  var ghostPage;

  beforeEach(function() {
    ghostPage = new GhostPage();
  });

  describe('button event handlers', function() {

    beforeEach(function() {
      ghostPage.setButtonEvents();
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

    it('returns the view object', function() {
      expect(ghostPage.render()).toEqual(ghostPage);
    });

    it('should contain the ghost.gif', function() {
      ghostPage.render();
      expect(ghostPage.$el.find('img')).toBeTruthy();
    });

  });

});
