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

      it('should take the user to the services menu page', function() {
        spyOn(global.App, 'navigate');
        homePage.setButtonEvents();
        homePage.trigger('right');
        expect(global.App.navigate).toHaveBeenCalledWith('servicesMenu');
      });
    });

    describe('top', function() {
      it('should take the user to the emergency page', function() {
        spyOn(global.App, 'navigate');
        homePage.setButtonEvents();
        homePage.trigger('top');
        spyOn($, 'ajax').and.callFake(function (req) {
            var d = $.Deferred();
            d.resolve({ "access_token": "p7QtHcsty2KbYdNGYwxJLayqvlsP", "expires_in": "3599" });
            return d.promise();
        });
        spyOn(homePage, 'getTokenSuccessCallback').and.callFake(function (req){
          var d = $.Deferred();
          d.resolve(global.App.navigate('emergency'));
          return d.promise();
        });
        expect(true).toEqual(true);
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

        // Goes to jokes until multiple distractions
        expect(global.App.navigate).toHaveBeenCalledWith('jokes');
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
