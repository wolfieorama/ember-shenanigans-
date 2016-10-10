Person = Ember.Object.extend({
  firstName: null,
  lastName: null,

  fullName: Ember.computed('firstName', 'lastName', function(){
    return `${this.get('firstName') ${this.get('lastName')}}`;
  }),

  fullNameChanged: Ember.observer('fullName', function(){
    // deal with the change
    console.log(`fullName changed to: ${this.get('fullName')}`);
  })
});


var person = Person.create({
  firstName: 'Yehuda',
  lastName: 'Kats'
});

person.get('fullName'); //'Yehuda Kats'
person.set('lastName', 'Brohuda');
person.get('fullName'); // 'fullName changed to: Yehuda Brohuda

//for an observer to fire on init we use Ember.on(take the init && observer)

Person = Ember.Object.extend({
  init(){
    this.set('salutation', 'Mr/MS');
  },

  salutationDidChange: Ember.on('init', Ember.observer('salutation', function(){
    return `New salutation has be updated to: ${this.get('salutation')}`;
  }) )
});

//adding observer

person.addObserver('fullName', function(){
  //code goes here about the change
})
