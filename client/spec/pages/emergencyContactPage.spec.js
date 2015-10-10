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
      ecPage.render();
    });

    describe('left', function() {
      it('should go back to settings page', function() {
        spyOn(global.App, 'navigate');
        ecPage.trigger('left');
        expect(global.App.navigate).toHaveBeenCalledWith('settings');
      });
    });

    describe('right', function() {
      it('should go back to settings page', function() {
        spyOn(global.App, 'navigate');
        ecPage.trigger('right');
        expect(global.App.navigate).toHaveBeenCalledWith('settings');
      });
    });

    describe('render', function() {
    it('should contain the number 0433323984', function() {
      ecPage.render();
      expect(ecPage.$el).toContainText('0433323984');
    });
  });  // describe('face', function() {
    //   it('should select the next input if the index is not 9', function() {
    //     ecPage.$el.find('.active').removeClass('active');
    //     ecPage.$el.find('input[data-index=\'0\']').addClass('active');
    //     ecPage.trigger('face');
    //     expect(ecPage.$el.find('.active').data('index')).toEqual(1);
    //   });
    //
    //   it('should select index 0 if the index is 9', function() {
    //     ecPage.$el.find('.active').removeClass('active');
    //     ecPage.$el.find('input[data-index=\'9\']').addClass('active');
    //     ecPage.trigger('face');
    //     expect(ecPage.$el.find('.active').data('index')).toEqual(0);
    //   });
    // });
  });

});
