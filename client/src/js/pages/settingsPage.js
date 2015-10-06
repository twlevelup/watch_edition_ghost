'use strict';

var ListPage = require('./listPage');

var SettingsPage = ListPage.extend({

  id: 'settings',

  template: require('../../templates/pages/settings.hbs')

});

module.exports = SettingsPage;
