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

      it('routes to the home page', function() {
        spyOn(global.App, 'navigate');
        ghostPage.trigger('left');
        expect(global.App.navigate).toHaveBeenCalledWith('');
      });

    });

    describe('right', function() {

      it('routes to the home page', function() {
        spyOn(global.App, 'navigate');
        ghostPage.trigger('right');
        expect(global.App.navigate).toHaveBeenCalledWith('');
      });

    });

    describe('top', function() {

      it('routes to the home page', function() {
        spyOn(global.App, 'navigate');
        ghostPage.trigger('top');
        expect(global.App.navigate).toHaveBeenCalledWith('');
      });

    });

    describe('bottom', function() {

      it('routes to the home page', function() {
        spyOn(global.App, 'navigate');
        ghostPage.trigger('bottom');
        expect(global.App.navigate).toHaveBeenCalledWith('');
      });

    });

    describe('face', function() {

      it('routes to the home page', function() {
        spyOn(global.App, 'navigate');
        ghostPage.trigger('face');
        expect(global.App.navigate).toHaveBeenCalledWith('');
      });

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
