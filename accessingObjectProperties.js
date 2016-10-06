const Person = Ember.Object.extend({
  name: 'Robert Jackson'
});

let person = Person.create();

person.get('name'); //'Robert Jackson'
person.set('name', 'Tobias Funke');
person.get('name'); //'Tobias Funke'

//Make sure to use these accessor methods; otherwise, computed properties won't recalculate, observers won't fire, and templates won't update.
