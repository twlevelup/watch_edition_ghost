'use strict';

var Page = require('../framework/page');

var EmergencyContactPage = Page.extend({

  id: 'emergency-contact',

  template: require('../../templates/pages/emergencyContact.hbs'),

  buttonEvents: {
    right: '',
    left: 'goToSettingsPage',
    top: '',
    bottom: '',
    face: 'moveToRight'
  },

  goToHomePage: function() {
    global.App.navigate('');
  },

  goToSettingsPage: function() {
    global.App.navigate('settings');
  },

  moveToRight: function() {
    var currentIndex = this.$el.find(".active").removeClass("active").data("index");
    // loop back
    var newIndex = (currentIndex + 1) % 10;
    this.$el.find('input[data-index="' + newIndex + '"]').addClass('active');
  },
  //
  // moveUp: function() {
  //   var oldActive = this.$el.find('li.active').removeClass('active');
  //   var currIndex = oldActive.data('index');
  //   var newIndex  = 0;
  //   if (currIndex === 0) {
  //     newIndex = 4;
  //   } else {
  //     newIndex = currIndex - 1;
  //   }
  //
  //   this.$el.find('li[data-index="' + newIndex + '"]').addClass('active');
  // },
  //
  // moveDown: function() {
  //   var oldActive = this.$el.find('li.active').removeClass('active');
  //   var currIndex = oldActive.data('index');
  //   var newIndex  = 0;
  //   if (currIndex === 4) {
  //     newIndex = 0;
  //   } else {
  //     newIndex = currIndex + 1;
  //   }
  //
  //   this.$el.find('li[data-index="' + newIndex + '"]').addClass('active');
  // },

  render: function() {
    this.$el.html(this.template());
    return this;

  }

});

module.exports = EmergencyContactPage;
