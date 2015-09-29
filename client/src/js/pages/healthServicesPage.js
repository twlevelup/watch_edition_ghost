'use strict';

var Page = require('../framework/page');

var HealthServicesPage = Page.extend({

  id: 'healthservices-page',

  template: require('../../templates/pages/healthServicesPage.hbs'),

  buttonEvents: {
    right: '',
    left: 'goBack',
    top: 'returnHome',
    bottom: '',
    face: ''
  },

  returnHome: function() {
    global.App.navigate('');
  },

  goBack: function() {
    this.back();
  },

  render: function() {

    var healthServices = [{
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

    this.$el.html(this.template({healthServices: healthServices}));
    return this;

  }

});

module.exports = HealthServicesPage;
