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
    var ghostIsVisible = false;
    $('#watch').on('click', function() {
      time = 0;
      ghostIsVisible = false;
    });

    setInterval(function() {
      time += 1;
      if ((!ghostIsVisible) && (time >= 5)) {
        global.App.navigate('ghost');
        ghostIsVisible = true;
      }
    }, 1000);
  }
});

module.exports = pageView;
