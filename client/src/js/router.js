
'use strict';

var Router = require('./framework/router.js'),
  HomePage = require('./pages/homePage'),
  ContactsPage = require('./pages/contactsPage'),
  EmergencyContactPage = require('./pages/emergencyContactPage'),
  SunPage = require('./pages/sunPage'),
  GhostPage = require('./pages/ghostPage'),
  HealthServicesPage = require('./pages/healthServicesPage'),
  SettingsPage = require('./pages/settingsPage'),
  ServiceMenuPage = require('./pages/serviceMenuPage'),
  DistractionsPage = require('./pages/distractionsPage'),
  JokesPage = require('./pages/jokesPage'),
  SupportGroupPage = require('./pages/supportgroupPage'),
  homePage = new HomePage(),
  contactsPage = new ContactsPage(),
  emergencyContactPage = new EmergencyContactPage(),
  sunPage = new SunPage(),
  ghostPage = new GhostPage(),
  healthServicesPage = new HealthServicesPage(),
  ghostPage = new GhostPage(),
  settingsPage = new SettingsPage(),
  serviceMenuPage = new ServiceMenuPage(),
  distractionsPage = new DistractionsPage(),
  supportGroupPage = new SupportGroupPage(),
  jokesPage = new JokesPage();

var AppRouter = Router.extend({

  routes: {
    '': 'home',
    contacts: 'contacts',
    emergencyContact: 'emergencyContact',
    sun: 'sun',
    ghost: 'ghost',
    healthServices: 'healthServices',
    settings: 'settings',
    servicesMenu: 'servicesMenu',
    distractions: 'distractions',
    jokes: 'jokes',
    supportGroups: 'supportGroup'
  },

  home: function() {
    this.renderView(homePage);
  },

  contacts: function() {
    this.renderView(contactsPage);
  },

  emergencyContact: function(){
    this.renderView(emergencyContactPage);
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

  servicesMenu: function () {
    this.renderView(serviceMenuPage);
  },

  distractions: function() {
    // this.renderView(distractionsPage);
    // TODO: For now
    this.renderView(distractionsPage);
  },

  jokes: function() {
    this.renderView(jokesPage);
  },
  supportGroup: function(){
    this.renderView(supportGroupPage);
  }
});

module.exports = AppRouter;
