'use strict';
var PageView = require('../framework/page');
var sunScreen = PageView.extend({
  id: 'sun',
  render: function() {
    return this;
  }
});
module.exports = sunScreen;
