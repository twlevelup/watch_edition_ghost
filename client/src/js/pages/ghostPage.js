'use strict';

var Page = require('../framework/page');

var GhostPage = Page.extend({

  id: 'ghost-page',

  template: require('../../templates/pages/ghostPage.hbs'),

  buttonEvents: {
    right: 'goToHome',
    left: 'goToHome',
    top: 'goToHome',
    bottom: 'goToHome',
    face: 'goToHome'
  },

  goToHome: function() {
    global.App.navigate('');
  },

  render: function() {

    this.$el.html(this.template());

    return this;

  }

});

module.exports = GhostPage;
