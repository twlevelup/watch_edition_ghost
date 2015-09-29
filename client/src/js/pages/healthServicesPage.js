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
    this.healthServices = new LocationsCollection();
    var healthCentres = [{
      serviceName: 'National Services',
      contactNum: '0488888888',
      kmDist: '10km'
    },
    {
      serviceName: 'Help Me',
      contactNum: '0477777777',
      kmDist: '11km'
    },
    {
      serviceName: 'Echo Services',
      contactNum: '0499999999',
      kmDist: '12km'
    }
  ];
    this.healthServices.push(healthCentres);
  },

  render: function() {

    this.healthServices.each(function () {
      // pass model.attributes to template
    });

    this.$el.html(this.template({healthServices: healthServices}));
    return this;

  }

});

module.exports = HealthServicesPage;
