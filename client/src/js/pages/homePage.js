'use strict';

var PageView = require('../framework/page'),
    $        = require('jquery');

var homeScreen = PageView.extend({

  id: 'home',

  template: require('../../templates/pages/home.hbs'),

  buttonEvents: {
    right: 'goToServices',
    top: 'goToEmergency',
    bottom: 'goToSettings',
    left: 'gotToDistractions'
  },

  goToServices: function() {
    global.App.navigate('servicesMenu');
  },

  goToEmergency: function() {
    // global.App.navigate('emergency');
    // sends message
    // get success status
    // if succes, render emergency success
    // else render emergency fail
    var data = {
      client_id: "YtvDuP0LRofh9lS2HKrSD0oGa25b03tS",
      client_secret: "cs3A64AsrOGpiYOC",
      grant_type: "client_credentials",
      scope: "SMS"
    };

    $.post("https://api.telstra.com/v1/oauth/token", data)
    .done(this.getTokenSuccessCallback)
    .fail(function(res){
      global.App.navigate('emergencyFail');
    });
  },

  getTokenSuccessCallback: function(data) {
    var self = this;
    var number = "";
    var body = "Hi, I really need your help. Please call me. Alan";
    var json = {
      to: number,
      body: body
    };
    $.ajax({
      url: "https://api.telstra.com/v1/sms/messages",
      dataType: "json",
      method: 'POST',
      data: JSON.stringify(json),
      beforeSend: function(xhr, settings) {
        xhr.setRequestHeader('Authorization', 'Bearer ' + data.access_token);
      }
    })
    .always(function(data){
      global.App.navigate('emergency');
    });
  },

  goToSettings: function() {
    global.App.navigate('settings');
  },

  gotToDistractions: function() {
    // Goes to jokes page until we have multiple distractions
    global.App.navigate('jokes');
  },

  render: function() {
    this.$el.html(this.template());
    this.timer();
    return this;
  }

});

module.exports = homeScreen;
