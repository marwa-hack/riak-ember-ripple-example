App.Contact = Ember.Resource.extend({
  resourceIdField: 'key',
  resourceUrl: '/contacts',
  resourceName: 'contact',
  resourceProperties: ['first_name', 'last_name'],

  fullName: Ember.computed(function() {
 	return this.first_name + ' ' + this.last_name;
  }).property('first_name', 'last_name')
});
