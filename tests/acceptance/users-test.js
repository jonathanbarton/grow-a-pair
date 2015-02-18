import Ember from 'ember';
import { module, test, skip } from 'qunit';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: Users', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('should have a list container for users', function(assert) {
 visit('/users')
  .then(function(){
    var listContainer = find('.user-list');
    assert.ok(listContainer.length);
  });

});

test('should contain 2 or more users', function(assert) {
  visit('/users')
    .then(function(){
      var listContainer = find('.user-list li');

      assert.ok(listContainer.length > 1);
    });

});
