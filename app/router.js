import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('users', function(){
      this.resource('pairs', function(){
        this.resource('pair', { path : 'pair/:pair_id' });
      });
  });
});

export default Router;
