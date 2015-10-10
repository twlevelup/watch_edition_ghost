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
    var time = 0;
    $('#watch').on('click', function() {
      time = 0;
    });

    setInterval(function() {
      time += 1;
      if (time >= 20) {
        global.App.navigate('ghost');
      }
    }, 1000);
  }
});

module.exports = pageView;
