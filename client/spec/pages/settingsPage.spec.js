'use strict';

var SettingsPage = require('../../src/js/pages/settingsPage.js'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('Settings', function() {

  var settingsPage;

  beforeEach(function() {
    settingsPage = new SettingsPage();
    settingsPage.setButtonEvents();
  });

  describe('rendering', function() {
    it('should go to emergency page', function() {
      settingsPage.render();
      expect(settingsPage.$el.html()).toContainText('Emergency Contacts');
    });
  });

  describe('render', function(){
    it('returns the view object', function() {
      expect(settingsPage.render()).toEqual(settingsPage);
    });
  });

  describe('buttons', function() {
    describe('right', function() {
      it('should go to the selected page', function() {
        spyOn(global.App, 'navigate');
        settingsPage.render();
        var url = settingsPage.$el.find('li.active').data('url');
        settingsPage.trigger('right');

        expect(global.App.navigate).toHaveBeenCalledWith(url);
      });
    });

    describe('top', function() {
      it('should move the cursor up by 1 cell', function() {
        spyOn(global.App, 'navigate');
        settingsPage.render();
        var initIndex = settingsPage.$el.find('li.active').data('index');
        settingsPage.trigger('top');

        var newIndex = settingsPage.$el.find('li.active').data('index');
        expect(newIndex).toEqual(2);

        expect(settingsPage.$el.find('ul > li.active').data('index')).toEqual(2);
      });
    });

    describe('bottom', function() {
      it('should move the cursor down by 1 cell and wrap around to the top of the list if at the bottom of the list', function() {
        spyOn(global.App, 'navigate');
        settingsPage.render();
        var initIndex = settingsPage.$el.find('li.active').data('index');
        settingsPage.trigger('bottom');

        var newIndex = settingsPage.$el.find('li.active').data('index');
        expect(newIndex).toEqual(4);

        expect(settingsPage.$el.find('ul > li.active').data('index')).toEqual(4);
      });
    });

    describe('left', function() {
      it('should select and go to the home page', function() {
        spyOn(global.App, 'navigate');
        settingsPage.trigger('left');
        expect(global.App.navigate).toHaveBeenCalledWith('');
      });
    });

    describe('face', function() {
      it('should take you to the home page', function() {
        spyOn(global.App, 'navigate');
        settingsPage.trigger('face');
        expect(global.App.navigate).toHaveBeenCalledWith('');
      });
    });
  });

});
