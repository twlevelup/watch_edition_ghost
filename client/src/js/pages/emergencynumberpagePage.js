'use strict';

var Page = require('../framework/page');

var EmergencynumberpagePage = Page.extend({

  id: 'emergencynumberpage-page',

  template: require('../../templates/pages/emergencynumberpagePage.hbs'),

  buttonEvents: {
    right: '',
    left: '',
    top: '',
    bottom: '',
    face: ''
  },

  render: function() {

    this.$el.html(this.template());

    return this;

  }

});

module.exports = EmergencynumberpagePage;
