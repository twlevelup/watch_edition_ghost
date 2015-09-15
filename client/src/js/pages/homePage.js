'use strict';

var PageView = require('../framework/page');

var homeScreen = PageView.extend({

  id: 'home',

  template: require('../../templates/pages/home.hbs'),

  buttonEvents: {
    right: 'goToContacts',
    top: 'goToEmergency',
    bottom: 'goToSettings',
    left: 'gotToDistractions'
  },

  goToContacts: function() {
    global.App.navigate('contacts');
  },

  goToEmergency: function() {
    global.App.navigate('emergency');
  },

  goToSettings: function() {
    global.App.navigate('settings');
  },

  gotToDistractions: function() {
    global.App.navigate('distractions');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = homeScreen;
