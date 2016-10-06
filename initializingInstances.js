const Person = Ember.Object.extend({
  init(){ //This is the ideal place to implement setup required on new instances:
    alert(`${this.get('name')}, reporting for duty!`);
  }
});

Person.create({
  name: 'Stefan Penner'
});

//alerts "Stefan Penner, reporting for duty!"
