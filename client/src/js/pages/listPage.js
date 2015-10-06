'use strict';

var Page = require('../framework/page');

var ListPage = Page.extend({

  template: require('../../templates/pages/listPage.hbs'),

  buttonEvents: {
    right: 'goToSelectedUrl',
    left: 'goToHomePage',
    top: 'moveUp',
    bottom: 'moveDown',
    face: 'goToHomePage'
  },

  goToSelectedUrl: function() {
    var url = this.$el.find('li.active').data('url');
    global.App.navigate(url);
  },

  goToHomePage: function() {
    global.App.navigate('');
  },

  moveUp: function() {
    var oldActive = this.$el.find('li.active').removeClass('active');
    var currIndex = oldActive.data('index');
    var newIndex  = 0;
    if (currIndex === 0) {
      newIndex = 4;
    } else {
      newIndex = currIndex - 1;
    }

    this.$el.find('li[data-index="' + newIndex + '"]').addClass('active');
  },

  moveDown: function() {
    var oldActive = this.$el.find('li.active').removeClass('active');
    var currIndex = oldActive.data('index');
    var newIndex  = 0;
    if (currIndex === 4) {
      newIndex = 0;
    } else {
      newIndex = currIndex + 1;
    }

    this.$el.find('li[data-index="' + newIndex + '"]').addClass('active');
  },

  render: function() {
    this.$el.html(this.template({}));
    return this;
  }

});

module.exports = ListPage;
