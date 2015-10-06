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
    // +5 is becase we're decrementing.
    // incase we get index -1 == -1, then it should loop back
    // to 4
    var newIndex = (oldActive.data('index') - 1 + 5) % 5;

    this.$el.find('li[data-index="' + newIndex + '"]').addClass('active');
  },

  moveDown: function() {
    var oldActive = this.$el.find('li.active').removeClass('active');
    var newIndex = (oldActive.data('index') + 1) % 5;

    this.$el.find('li[data-index="' + newIndex + '"]').addClass('active');
  },

  render: function() {
    this.$el.html(this.template({}));
    return this;
  }

});

module.exports = ListPage;
