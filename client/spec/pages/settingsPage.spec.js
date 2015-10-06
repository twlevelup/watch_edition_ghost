'use strict';

var SettingsPage = require('../../src/js/pages/settingsPage.js'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('Settings', function() {

  var settingsPage;

  beforeEach(function() {
    settingsPage = new SettingsPage();
  });

  describe('Links', function() {

    it('Contains Emergency Contacts Link', function() {
      settingsPage.render();
      expect(settingsPage.$el.html()).toContainText('Emergency Contacts');
    });

  });

  describe('buttons', function() {
    describe('right', function() {
      it('should go to the selected page', function() {
        spyOn(global.App, 'navigate');
        settingsPage.render();
        var url = settingsPage.$el.find('li.active').data('url');
        settingsPage.setButtonEvents();
        settingsPage.trigger('right');

        expect(global.App.navigate).toHaveBeenCalledWith(url);
      });
    });

    describe('top', function() {
      it('should move the cursor up by 1 cell', function() {
        spyOn(global.App, 'navigate');
        settingsPage.render();
        var initIndex = settingsPage.$el.find('li.active').data('index');
        settingsPage.setButtonEvents();
        settingsPage.trigger('top');

        var newIndex = settingsPage.$el.find('li.active').data('index');
        expect(newIndex).toEqual(2);

        expect(settingsPage.$el.find('#settings-list > ul > li.active').data('index')).toEqual(2);
      });
    });

    describe('bottom', function() {
      it('should move the cursor down by 1 cell', function() {
        spyOn(global.App, 'navigate');
        settingsPage.render();
        var initIndex = settingsPage.$el.find('li.active').data('index');
        settingsPage.setButtonEvents();
        settingsPage.trigger('bottom');

        var newIndex = settingsPage.$el.find('li.active').data('index');
        expect(newIndex).toEqual(4);

        expect(settingsPage.$el.find('#settings-list > ul > li.active').data('index')).toEqual(4);
      });
    });

    describe('left', function() {
      it('should select and go to the home page', function() {
        spyOn(global.App, 'navigate');
        settingsPage.setButtonEvents();
        settingsPage.trigger('left');
        expect(global.App.navigate).toHaveBeenCalledWith('');
      });
    });
  });
});
