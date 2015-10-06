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
});
