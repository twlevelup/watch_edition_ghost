'use strict';

var ListPage = require('./listPage');

var ServiceMenuPage = ListPage.extend({

  id: 'serviceMenu-page',

  template: require('../../templates/pages/serviceMenu.hbs')

});

module.exports = ServiceMenuPage;
