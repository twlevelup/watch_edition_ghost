'use strict';

var Page = require('../framework/page');

var HealthServicesPage = Page.extend({

  id: 'healthservices-page',

  template: require('../../templates/pages/healthServicesPage.hbs'),

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
    this.healthCentreLocations = new LocationsCollection();

    var healthCentres = [{
      serviceName: 'Sydney Hospital',
      contactNum: '(02) 9382 7111',
      kmDist: '1.1km'
    },
    {
      serviceName: 'Quay Health',
      contactNum: '(02) 9251 3411',
      kmDist: '2.3km'
    },
    {
      serviceName: 'O\'Connell Street Medical Centre',
      contactNum: '(02) 9241 1577',
      kmDist: '3.2km'
    }];

    this.healthCentreLocations.reset(healthCentres);
  },

  render: function() {
    this.$el.html(this.template({healthServices: this.healthCentreLocations.toJSON()}));
    return this;
  }

});

module.exports = HealthServicesPage;
