import DS from 'ember-data';

export default DS.Model.extend({
  fullName: DS.attr('string'),
  availability: DS.attr('boolean'),
  email: DS.attr('string')
});
