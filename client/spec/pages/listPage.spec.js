'use strict';

var ListPage = require('../../src/js/pages/listPage.js'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('List', function() {

  var listPage;

  beforeEach(function() {
    listPage = new ListPage();
    listPage.setButtonEvents();
  });

  describe('render', function(){
    it('returns the view object', function() {
      expect(listPage.render()).toEqual(listPage);
    });
  });

  describe('buttons', function() {
    describe('right', function() {
      it('should go to the selected page', function() {
        spyOn(global.App, 'navigate');
        listPage.render();
        var url = listPage.$el.find('li.active').data('url');
        listPage.trigger('right');

        expect(global.App.navigate).toHaveBeenCalledWith(url);
      });
    });

    describe('top', function() {
      it('should move the cursor up by 1 cell', function() {
        spyOn(global.App, 'navigate');
        listPage.render();
        var initIndex = listPage.$el.find('li.active').data('index');
        listPage.trigger('top');

        var newIndex = listPage.$el.find('li.active').data('index');
        expect(newIndex).toEqual(2);

        expect(listPage.$el.find('ul > li.active').data('index')).toEqual(2);
      });
    });

    describe('bottom', function() {
      it('should move the cursor down by 1 cell and wrap around to the top of the list if at the bottom of the list', function() {
        spyOn(global.App, 'navigate');
        listPage.render();
        var initIndex = listPage.$el.find('li.active').data('index');
        listPage.trigger('bottom');

        var newIndex = listPage.$el.find('li.active').data('index');
        expect(newIndex).toEqual(0);

        expect(listPage.$el.find('ul > li.active').data('index')).toEqual(0);
      });
    });

    describe('left', function() {
      it('should select and go to the home page', function() {
        spyOn(global.App, 'navigate');
        listPage.trigger('left');
        expect(global.App.navigate).toHaveBeenCalledWith('');
      });
    });

    describe('face', function() {
      it('should take you to the home page', function() {
        spyOn(global.App, 'navigate');
        listPage.trigger('face');
        expect(global.App.navigate).toHaveBeenCalledWith('');
      });
    });
  });
});
