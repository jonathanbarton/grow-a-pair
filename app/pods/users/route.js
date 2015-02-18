import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('user');
  },
  actions:{
    generate: function(){
      console.log('you generated a thing');
    }
  }
});
