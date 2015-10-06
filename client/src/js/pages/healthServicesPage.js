'use strict';

var Page = require('../framework/page');

var HealthServicesPage = Page.extend({

  id: 'healthservices-page',

  template: require('../../templates/pages/healthServicesPage.hbs'),

  buttonEvents: {
    right: '',
    left: 'goBack',
    top: '',
    bottom: '',
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
    this.healthCentreLocations = new LocationsCollection();

    var healthCentres = [{
      serviceName: 'Health Service A',
      contactNum: '0411111111',
      kmDist: '4km'
    },
    {
      serviceName: 'Health Service B',
      contactNum: '0422222222',
      kmDist: '6km'
    },
    {
      serviceName: 'Health Service C',
      contactNum: '0433333333',
      kmDist: '8km'
    }];

    this.healthCentreLocations.reset(healthCentres);
  },

  render: function() {
    this.$el.html(this.template({healthServices: this.healthCentreLocations.toJSON()}));
    return this;
  }

});

module.exports = HealthServicesPage;
