const Person = Ember.Object.extend({ //this defines a Person class with a say() method.
  say(thing){
    alert(thing);
  }
});

//app/components/todo-item.js creating a subclass of Ember.Component

export default Ember.Component.extend({
  classNameBindings :['isUrgent'],
  isUrgent: true
});

//Overriding Parent Class Methods

const Person = Ember.Object.extend({
  say(thing){
    alert(`${this.get('name')} says: ${thing}`);
  }
});

const Soldier = Person.extend({
  say(thing){
    this._super(`${thing}, sir!`);
  }
});

let yehuda = Soldier.create({
  name: 'Yehuda Katz'
});

yehuda.say('Yes'); //alerts "Yehuda Katz says: Yes, sir!"

//passing arguments to _super() use the spread operator

normalizeResponse(store, primaryModelClass, payload, id, requestType)  {
  // Customize my JSON payload for Ember-Data
  return this._super(...arguments);
}
