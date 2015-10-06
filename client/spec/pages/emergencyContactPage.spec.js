'use strict';

var EmergencyContactPage = require('../../src/js/pages/emergencyContactPage'),
  Router = require('../../src/js/router.js'),
  App = require('../../src/js/app');

global.App = App;

describe('The Emergency Contact Settings Page', function() {

  var ecPage;

  beforeEach(function() {
    ecPage = new EmergencyContactPage();
  });

  describe('button events', function() {

    beforeEach(function() {
      ecPage.setButtonEvents();
    });

    describe('left', function() {
      it('should take the user to the previous (settings) page', function() {
        spyOn(global.App, 'navigate');
        ecPage.trigger('left');
        expect(global.App.navigate).toHaveBeenCalledWith('settings');
      });
    });

    describe('face', function() {
      it('should take the user to the home page', function() {
        spyOn(global.App, 'navigate');
        ecPage.trigger('face');
        expect(global.App.navigate).toHaveBeenCalledWith('');
      });
    });
  });

});
