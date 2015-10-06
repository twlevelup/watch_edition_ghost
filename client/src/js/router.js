
'use strict';

var Router = require('./framework/router.js'),
  HomePage = require('./pages/homePage'),
  ContactsPage = require('./pages/contactsPage'),
  SunPage = require('./pages/sunPage'),
  GhostPage = require('./pages/ghostPage'),
  HealthServicesPage = require('./pages/healthServicesPage'),
  SettingsPage = require('./pages/settingsPage'),
  homePage = new HomePage(),
  contactsPage = new ContactsPage(),
  sunPage = new SunPage(),
  ghostPage = new GhostPage(),
  healthServicesPage = new HealthServicesPage(),
  ghostPage = new GhostPage(),
  settingsPage = new SettingsPage();


var AppRouter = Router.extend({

  routes: {
    '': 'home',
    contacts: 'contacts',
    sun: 'sun',
    ghost: 'ghost',
    healthServices: 'healthServices',
    settings: 'settings',
  },

  home: function() {
    this.renderView(homePage);
  },

  contacts: function() {
    this.renderView(contactsPage);
  },

  healthServices: function () {
    this.renderView(healthServicesPage);
  },

  sun: function() {
    this.renderView(sunPage);
  },

  ghost: function() {
    this.renderView(ghostPage);
  },

  settings: function() {
    this.renderView(settingsPage);
  }

});

module.exports = AppRouter;
