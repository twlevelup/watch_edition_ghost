'use strict';

var JokesPage = require('../../src/js/pages/jokesPage.js'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('jokes', function() {

  var jokesPage;

  beforeEach(function() {
    jokesPage = new JokesPage();
  });

  describe('button event handlers', function() {

    beforeEach(function() {
      jokesPage.setButtonEvents();
    });

    describe('left', function() {
      it('routes to the distractions page', function() {
        spyOn(global.App, 'navigate');
        jokesPage.trigger('left');
        expect(global.App.navigate).toHaveBeenCalledWith('distractions');
      });
    });

    describe('right', function() {
      xit('should have tests');
    });

    describe('top', function() {
      it('should change the joke', function() {
        jokesPage.render();
        var el = jokesPage.$el;

        var before = el.find('#joke')[0].innerHTML;
        jokesPage.trigger('top');
        var after = el.find('#joke')[0].innerHTML;

        expect(before).not.toEqual(after);
      });
    });

    describe('bottom', function() {
      it('should change the joke', function() {
        jokesPage.render();
        var el = jokesPage.$el;

        var before = el.find('#joke')[0].innerHTML;
        jokesPage.trigger('top');
        var after = el.find('#joke')[0].innerHTML;

        expect(before).not.toEqual(after);
      });
    });

    describe('face', function() {
      xit('should have tests');
    });

  });

  describe('rendering', function() {

    it('should produce the correct HTML', function() {
      jokesPage.render();
      var html = jokesPage.$el.html();
      expect(html).toContainText('Jokes');
    });

    it('returns the view object', function() {
      expect(jokesPage.render()).toEqual(jokesPage);
    });

    it('should show a joke', function() {
      jokesPage.render();
      var el = jokesPage.$el;
      expect(el.find('#joke').length).toEqual(1);
    });
  });

});
