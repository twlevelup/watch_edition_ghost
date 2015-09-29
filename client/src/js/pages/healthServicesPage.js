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

  initialize: function () {
    var LocationsCollection = Backbone.Collection.extend({});
    this.healthCentreLocations = new LocationsCollection();

    var healthCentres = [{
      serviceName: 'Name A',
      contactNum: '111',
      kmDist: '1'
    }];

    this.healthCentreLocations.reset(healthCentres);
  },

  render: function() {
    this.$el.html(this.template({healthServices: this.healthCentreLocations.toJSON()}));
    return this;
  }

});

module.exports = HealthServicesPage;
