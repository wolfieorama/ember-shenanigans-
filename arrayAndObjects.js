//Arrays and objects defined directly on any Ember.Object are shared across all instances of that object.

const Person = Ember.Object.extend({
  shoppingList: ['eggs', 'cheese'] //// Stefan and Robert both trigger their addItem.
// They both end up with: ['eggs', 'cheese', 'bacon', 'sausage']

//To avoid this behavior, it is encouraged to initialize those arrays and object properties during init()
init(){
  this.set('shoppingList', ['eggs', 'cheese']);
}
});

Person.create({
  name: "Stefan Penner",
  addItem(){
    this.get('shoppingList').pushObject('bacon');
  }
});

Person.create({
  name: "Stefan Penner",
  addItem(){
    this.get('shoppingList').pushObject('sausage');
  }
});

//expected

// Stefan ['eggs', 'cheese', 'bacon']
// Robert ['eggs', 'cheese', 'sausage']
