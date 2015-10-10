'use strict';

var EmergencyFailPage = require('../../src/js/pages/emergencyFailPage'),
  Router = require('../../src/js/router.js'),
  App = require('../../src/js/app');

global.App = App;

describe('The Emergency fail Page', function() {

  var emergencyFailPage;

  beforeEach(function() {
    emergencyFailPage = new EmergencyFailPage();
  });

  describe('show message', function() {

    it('Contains fail message', function() {
      emergencyFailPage.render();
      expect(emergencyFailPage.$el.html()).toContainText('Message not sent. No network tour sponsors number is 0433 313 984');
    });
  });

  describe('backToHome', function(){
    it('renders home page', function(){
      spyOn(global.App, 'navigate');
      emergencyFailPage.render();
      setTimeout(function(){
        expect(global.App.navigate).toHaveBeenCalledWith('');
      }, 3000);
    });
  });
});
