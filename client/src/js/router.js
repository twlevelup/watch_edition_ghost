
'use strict';

var Router = require('./framework/router.js'),
  HomePage = require('./pages/homePage'),
  ContactsPage = require('./pages/contactsPage'),
  SunPage = require('./pages/sunPage'),
  GhostPage = require('./pages/ghostPage'),
  HealthServicesPage = require('./pages/healthServicesPage'),
  SettingsPage = require('./pages/settingsPage'),
  DistractionsPage = require('./pages/distractionsPage'),
  JokesPage = require('./pages/jokesPage'),
  homePage = new HomePage(),
  contactsPage = new ContactsPage(),
  sunPage = new SunPage(),
  ghostPage = new GhostPage(),
  healthServicesPage = new HealthServicesPage(),
  ghostPage = new GhostPage(),
  settingsPage = new SettingsPage(),
  distractionsPage = new DistractionsPage(),
  jokesPage = new JokesPage();

var AppRouter = Router.extend({

  routes: {
    '': 'home',
    contacts: 'contacts',
    sun: 'sun',
    ghost: 'ghost',
    healthServices: 'healthServices',
    settings: 'settings',
    distractions: 'distractions'
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
  },

  distractions: function() {
    // this.renderView(distractionsPage);
    // TODO: For now
    this.renderView(jokesPage);
  },

  jokes: function() {
    this.renderView(jokesPage);
  }
});

module.exports = AppRouter;
