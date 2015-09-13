'use strict';

var HomePage = require('../../src/js/pages/homePage'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app'),
  $   = require('jquery');

global.App = App;

describe('The Home Page', function() {
  var homePage;

  beforeEach(function() {
    homePage = new HomePage();
  });

  describe('button event handlers', function() {

    describe('right', function() {

      it('should take the user to the contacts page', function() {
        spyOn(global.App, 'navigate');
        homePage.setButtonEvents();
        homePage.trigger('right');
        expect(global.App.navigate).toHaveBeenCalledWith('contacts');
      });
    });

    describe('top', function() {
      it('should scroll the watch face up', function() {
        spyOn(homePage, 'scrollUp');
        homePage.setButtonEvents();
        homePage.trigger('top');
        expect(homePage.scrollUp).toHaveBeenCalled();
      });
    });

    describe('bottom', function() {
      it('should scroll the watch face down', function() {
        spyOn(homePage, 'scrollDown');
        homePage.setButtonEvents();
        homePage.trigger('bottom');
        expect(homePage.scrollDown).toHaveBeenCalled();
      });
    });

  });

  describe('rendering', function() {

    it('returns the view object', function() {
      expect(homePage.render()).toEqual(homePage);
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
