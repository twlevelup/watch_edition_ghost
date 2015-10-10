'use strict';

var Page = require('../framework/page');

var DistractionsPage = Page.extend({

  id: 'distractions-page',

  template: require('../../templates/pages/distractionsPage.hbs'),

  buttonEvents: {
    right: '',
    left: 'goToHome',
    top: '',
    bottom: '',
    face: ''
  },

  render: function() {
    this.$el.html(this.template());

    return this;
  },

  goToHome: function() {
    global.App.navigate('');
  }

});

module.exports = DistractionsPage;
