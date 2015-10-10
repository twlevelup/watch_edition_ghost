'use strict';

var Page = require('../framework/page');

var SupportgroupPage = Page.extend({

  id: 'supportgroup-page',

  template: require('../../templates/pages/supportgroupPage.hbs'),

  buttonEvents: {
    right: 'returnHome',
    left: 'goBack',
    top: 'returnHome',
    bottom: 'returnHome',
    face: 'returnHome'
  },

  returnHome: function() {
    global.App.navigate('');
  },

  goBack: function() {
    this.back();
  },

  initialize: function() {
    var LocationsCollection = Backbone.Collection.extend({});
    this.supportgroupLocations = new LocationsCollection();

    var supportGroups = [{
      serviceName: 'AA Adelaide St',
      contactNum: '(02) 9389 6333',
      kmDist: '1.1km'
    },
    {
      serviceName: 'AA Edwin St',
      contactNum: '(02) 9799 1199',
      kmDist: '2.3km'
    },
    {
      serviceName: 'AA Firth St',
      contactNum: '(02) 9599 8866',
      kmDist: '3.2km'
    }];

    this.supportgroupLocations.reset(supportGroups);
  },

  render: function() {
    this.$el.html(this.template({supportGroups: this.supportgroupLocations.toJSON()}));
    return this;
  }

});

module.exports = SupportgroupPage;
