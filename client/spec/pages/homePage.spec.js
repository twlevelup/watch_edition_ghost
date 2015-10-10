'use strict';

var HomePage = require('../../src/js/pages/homePage'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app'),
  $   = require('jquery'),
  GhostPage = require('../../src/js/pages/ghostPage');

global.App = App;

describe('The Home Page', function() {
  var homePage;
  var ghostPage;

  beforeEach(function() {
    homePage = new HomePage();
    ghostPage = new GhostPage();
  });

  describe('button event handlers', function() {

    describe('right', function() {

      it('should take the user to the health services page', function() {
        spyOn(global.App, 'navigate');
        homePage.setButtonEvents();
        homePage.trigger('right');
        expect(global.App.navigate).toHaveBeenCalledWith('healthServices');
      });
    });

    describe('top', function() {
      it('should take the user to the emergency page', function() {
        spyOn(global.App, 'navigate');
        homePage.setButtonEvents();
        homePage.trigger('top');
        expect(global.App.navigate).toHaveBeenCalledWith('emergency');
      });
    });

    describe('bottom', function() {
      it('should take the user to the settings page', function() {
        spyOn(global.App, 'navigate');
        homePage.setButtonEvents();
        homePage.trigger('bottom');
        expect(global.App.navigate).toHaveBeenCalledWith('settings');
      });
    });

    describe('left', function() {
      it('should take the user to the distractions page', function() {
        spyOn(global.App, 'navigate');
        homePage.setButtonEvents();
        homePage.trigger('left');
        expect(global.App.navigate).toHaveBeenCalledWith('distractions');
      });
    });
  });

  describe('rendering', function() {

    it('returns the view object', function() {
      expect(homePage.render()).toEqual(homePage);
    });

    it('go to ghost page after 30 seconds', function() {
      spyOn(global.App, 'navigate');
      homePage.render();
      setTimeout(function() { expect(global.App.navigate).toHaveBeenCalledWith('ghost'); }, 5000);
    });

  });

  describe('show the homepage', function() {
    it('shows a plus sign', function() {
      homePage.render();
      expect(homePage.$el.find('#emergency-button')).toHaveClass('fa fa-plus fa-5x');
    });

    it('shows a cog sign', function() {
      homePage.render();
      expect(homePage.$el.find('#settings-button')).toHaveClass('fa fa-cog fa-5x');
    });

    it('shows a users sign', function() {
      homePage.render();
      expect(homePage.$el.find('#contacts-button')).toHaveClass('fa fa-users fa-5x');
    });

  });
});
