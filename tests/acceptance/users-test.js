import Ember from 'ember';
import { module, test, skip } from 'qunit';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: Users', {
  beforeEach: function() {
    application = startApp();
    loadUsersPage();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('should have a list container for users', function(assert) {
  loadUsersPage();

  andThen(function(){
    var listContainer = find('.user-list');

    assert.ok(listContainer.length);
  });
});

test('visiting /users', function(assert) {
  loadUsersPage();

  andThen(function() {
    assert.equal(currentPath(), 'users');
    var title = find('#title').text();
    assert.equal(title, 'Welcome to Ember.js');

    var userList = find('.user-list .user');
    assert.ok(userList.length);
  });
});

function loadUsersPage() {
  visit('/users');
}
