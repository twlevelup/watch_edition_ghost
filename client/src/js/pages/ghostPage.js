'use strict';

var Page = require('../framework/page');

var GhostPage = Page.extend({

  id: 'ghost-page',

  template: require('../../templates/pages/ghostPage.hbs'),

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

module.exports = GhostPage;
