import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('users');
  this.route('pairs');
  this.resource('pair', function(){

    this.route('add');
    this.route('edit');

  });
});

export default Router;
