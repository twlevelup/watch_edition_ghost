'use strict';

var PageView = require('../framework/page');

var homeScreen = PageView.extend({

  id: 'home',

  template: require('../../templates/pages/home.hbs'),

  buttonEvents: {
    right: 'goToServices',
    top: 'goToEmergency',
    bottom: 'goToSettings',
    left: 'gotToDistractions'
  },

  goToServices: function() {
    global.App.navigate('servicesMenu');
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
    this.timer();
    return this;
  }

});

module.exports = homeScreen;
