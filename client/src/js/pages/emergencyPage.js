'use strict';

var Page = require('../framework/page');

var EmergencyPage = Page.extend({

  id: 'emergency',

  template: require('../../templates/pages/emergencyPage.hbs'),

  buttonEvents: {
    right: '',
    left: '',
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

module.exports = EmergencyPage;
