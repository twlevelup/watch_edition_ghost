'use strict';

var AppRouter = require('../src/js/router.js'),
  PageView = require('../src/js/framework/page'),
  HomePage = require('../src/js/pages/homePage'),
  ContactPage = require('../src/js/pages/contactsPage'),
  SunPage = require('../src/js/pages/sunPage'),
  GhostPage = require('../src/js/pages/ghostPage');


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

});


});
