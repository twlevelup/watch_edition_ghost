'use strict';

var pageView = Backbone.View.extend({

  className: 'page',

  setButtonEvents: function() {
    _.each(this.buttonEvents, function(eventHandler, buttonID) {
      this.listenTo(this, buttonID, this[eventHandler]);
    }, this);
  },

  back: function() {
    history.back();
  },

  timer: function() {
    setTimeout(function() { global.App.navigate('ghost'); }, 30000);
  }

});

module.exports = pageView;
