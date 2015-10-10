'use strict';

var Page = require('../framework/page');

var EmergencyFailPage = Page.extend({

  id: 'emergency-fail',

  template: require('../../templates/pages/emergencyFailPage.hbs'),

  buttonEvents: {
    right: '',
    left: 'goToSettingsPage',
    top: '',
    bottom: '',
    face: ''
  },

  goToHomePage: function() {
    global.App.navigate('');
  },

  render: function() {
    this.$el.html(this.template());
    setTimeout(this.goToHomePage, 3000);
    return this;
  }

});

module.exports = EmergencyFailPage;
