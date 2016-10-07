Person = Ember.Object.extend({
  firstName: null,
  lastName: null,

  fullName: Ember.computed('firstName', 'lastName', function(){
    return `${this.get('firstName')} ${this.get('lastName')}`;
  })

  let student = Person.create({
    firstName: 'Mike',
    lastName: 'Onyango'
  });

  student.get('fullName'); //"Mike Onyango"

});
