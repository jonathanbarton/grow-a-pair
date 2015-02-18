import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.RESTAdapter.extend({ 
  namespace: 'api',
  host: 'http://localhost:' + ENV.APP.port
});
