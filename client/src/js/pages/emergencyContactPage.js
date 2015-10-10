'use strict';

var Page = require('../framework/page');

var EmergencyContactPage = Page.extend({

  id: 'emergency-contact',

  template: require('../../templates/pages/emergencyContact.hbs'),

  buttonEvents: {
    right: 'goToSettingsPage',
    left: 'goToSettingsPage',
    top: '',
    bottom: '',
    face: 'goToHomePage'
  },

  goToHomePage: function() {
    global.App.navigate('');
  },

  goToSettingsPage: function() {
    global.App.navigate('settings');
  },

  render: function() {
    this.$el.html(this.template());
    return this;

  }

});

module.exports = EmergencyContactPage;
