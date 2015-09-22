'use strict';

var Page = require('../framework/page');

var HealthservicesPage = Page.extend({

  id: 'healthservices-page',

  template: require('../../templates/pages/healthservicesPage.hbs'),

  buttonEvents: {
    right: '',
    left: '',
    top: '',
    bottom: '',
    face: ''
  },

  render: function() {

    var healthServices = [{
      serviceName: 'National Services',
      contactNum: '0488888888',
      kmDist: '10km',
    },
    {
      serviceName: 'Echo Services',
      contactNum: '0499999999',
      kmDist: '12km',
    },
    {
      serviceName: 'Help Me',
      contactNum: '0477777777',
      kmDist: '11km',
    }
  ];

    this.$el.html(this.template({healthServices: healthServices}));
    return this;

  }

});

module.exports = HealthservicesPage;
