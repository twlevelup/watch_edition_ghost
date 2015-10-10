'use strict';

var EmergencyPage = require('../../src/js/pages/emergencyPage'),
  Router = require('../../src/js/router.js'),
  App = require('../../src/js/app');

global.App = App;

describe('The Emergency Page', function() {

  var emergencyPage;

  beforeEach(function() {
    emergencyPage = new EmergencyPage();
  });

  describe('show message', function() {

    it('Contains success message', function() {
      emergencyPage.render();
      expect(emergencyPage.$el.html()).toContainText('Message sent');
    });
  });

  describe('backToHome', function(){
    it('renders home page', function(){
      spyOn(global.App, 'navigate');
      emergencyPage.render();
      setTimeout(function(){
        expect(global.App.navigate).toHaveBeenCalledWith('');
      }, 3000);
    });
  });
});
