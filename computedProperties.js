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


//This allows you to observe both foo and bar on baz with much less duplication/redundancy when your dependent keys are mostly similar.
let obj = Ember.Object.extend({
  baz: {foo: 'BLAMMO', bar: 'BLAZORZ'},

  something: Ember.computed('baz.{foo,bar}', function() {
    return this.get('baz.foo') + ' ' + this.get('baz.bar');
  })
});
