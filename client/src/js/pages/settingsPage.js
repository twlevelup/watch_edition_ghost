'use strict';

var Page = require('../framework/page');

var SettingsPage = Page.extend({

  id: 'settings',

  template: require('../../templates/pages/settings.hbs'),

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

    var settings = [{
      serviceName: 'National Services',
      contactNum: '0488888888',
      kmDist: '10km'
    },
    {
      serviceName: 'Echo Services',
      contactNum: '0499999999',
      kmDist: '12km'
    },
    {
      serviceName: 'Help Me',
      contactNum: '0477777777',
      kmDist: '11km'
    }
  ];

    this.$el.html(this.template({Settings: settings}));
    return this;

  }

});

module.exports = SettingsPage;
