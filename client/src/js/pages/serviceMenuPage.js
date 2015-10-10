'use strict';

var ListPage = require('./listPage');

var ServiceMenuPage = ListPage.extend({

  id: 'settings',

  template: require('../../templates/pages/serviceMenu.hbs')

});

module.exports = ServiceMenuPage;
