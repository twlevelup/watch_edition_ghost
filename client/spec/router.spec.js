'use strict';

var AppRouter = require('../src/js/router.js'),
  PageView = require('../src/js/framework/page'),
  HomePage = require('../src/js/pages/homePage'),
  ContactPage = require('../src/js/pages/contactsPage'),
  SunPage = require('../src/js/pages/sunPage'),
  GhostPage = require('../src/js/pages/ghostPage'),
  HealthServicesPage = require('../src/js/pages/healthServicesPage'),
  DistractionsPage = require('../src/js/pages/distractionsPage'),
  JokesPage = require('../src/js/pages/jokesPage'),
  SettingsPage = require('../src/js/pages/settingsPage');

describe('Application Router', function() {

  var router;

  describe('The Routes', function() {

    beforeEach(function() {
      router = new AppRouter();
      spyOn(router, 'renderView');
    });

    describe('#home', function() {
      it('should load the home screen', function() {
        router.home();
        var isHomePage = router.renderView.calls.argsFor(0)[0] instanceof HomePage;
        expect(isHomePage).toBeTruthy();
      });
    });

    describe('#settings', function(){
      it('should load the settings screen', function(){
        router.settings();
        var isSettingsPage = router.renderView.calls.argsFor(0)[0] instanceof SettingsPage;
        expect(isSettingsPage).toBeTruthy();
      });
    });

    describe('#contacts', function() {
      it('should load the contacts screen', function() {
        router.contacts();
        var isContactPage = router.renderView.calls.argsFor(0)[0] instanceof ContactPage;
        expect(isContactPage).toBeTruthy();
      });
    });

	describe('#sun', function() {
	 it('should load the sun screen', function() {
	   router.sun();
	   var isSunPage = router.renderView.calls.argsFor(0)[0] instanceof SunPage;
	   expect(isSunPage).toBeTruthy();
	 });
	});

  describe('#ghost', function(){
    it('should show the ghost screen', function(){
      router.ghost();
      var isGhostPage = router.renderView.calls.argsFor(0)[0] instanceof GhostPage;
      expect(isGhostPage).toBeTruthy();
    });
  });

  describe('#healthServices', function() {
    it('should load the Health Services screen', function() {
      router.healthServices();
      var isHealthServicesPage = router.renderView.calls.argsFor(0)[0] instanceof HealthServicesPage;
      expect(isHealthServicesPage).toBeTruthy();
    });
  });

  describe('#distractions', function() {
    it('should load the distractions screen', function() {
      router.distractions();
      var isDistractionsPage = router.renderView.calls.argsFor(0)[0] instanceof DistractionsPage;
      expect(isDistractionsPage).toBeTruthy();
    });
  });

  describe('#jokes', function() {
    it('should load the distractions screen', function() {
      router.jokes();
      var isJokesPage = router.renderView.calls.argsFor(0)[0] instanceof JokesPage;
      expect(isJokesPage).toBeTruthy();
    });
  });
});


});
