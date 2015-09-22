
'use strict';

var Router = require('./framework/router.js'),
  HomePage = require('./pages/homePage'),
  ContactsPage = require('./pages/contactsPage'),
  SunPage = require('./pages/sunPage'),
  GhostPage = require('./pages/ghostPage'),
  HealthServicesPage = require('./pages/healthServicesPage'),
  homePage = new HomePage(),
  contactsPage = new ContactsPage(),
  sunPage = new SunPage(),
  ghostPage = new GhostPage(),
  healthServicesPage = new HealthServicesPage();


var AppRouter = Router.extend({

  routes: {
    '': 'home',
    contacts: 'contacts',
    sun: 'sun',
    ghost: 'ghost'
    healthServices: 'healthServices'
  },

  home: function() {
    this.renderView(homePage);
  },

  contacts: function() {
    this.renderView(contactsPage);
  },

  sun: function() {
    this.renderView(sunPage);
  },

  ghost: function() {
    this.renderView(ghostPage);
  },

  healthServices: function () {
    this.renderView(healthServicesPage);
  }

});

module.exports = AppRouter;
