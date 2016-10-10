myArray = [];

myArray.pushObject("a", "b"); //["a", "b"]
myArray.popObject();//"b"
myArray.reverseObject();//["b", "a"]
myArray.shiftObject();//"a"
myArray.unshiftObject();//"a"
myArray.get('firstObject')
myArray.get('lastObject')

//iterating over enumerables

let food = ['Poi', 'Ono', 'Adobo Chicken'];

food.forEach((item, index) => {
  console.log(`Menu Item ${index+1}: ${item}`);
});

// Menu Item 1: Poi
// Menu Item 2: Ono
// Menu Item 3: Adobo Chicken


//first and last Object

let animals = ['rooster', 'pig'];

animals.get('lastObject'); //=> "pig"

animals.pushObject('peacock');

animals.get('lastObject'); //=> "peacock"

//map

let words = ['goodbye', 'cruel', 'world'];

let emphaticWords = words.map(item => `${item}!`);
//=> ["goodbye!", "cruel!", "world!"]


 // mapBy() for extracting object properties

 let hawaii = Ember.Object.create({
  capital: 'Honolulu'
});

let california = Ember.Object.create({
  capital: 'Sacramento'
});

let states = [hawaii, california];

states.mapBy('capital');
//=> ["Honolulu", "Sacramento"]

//filterBy()

Todo = Ember.Object.extend({
  title: null,
  isDone: false
});

let todos = [
  Todo.create({ title: 'Write code', isDone: true }),
  Todo.create({ title: 'Go to sleep' })
];

todos.filterBy('isDone', true);//find() and findBy(), which work like filter() and filterBy(), but return only one item.
// returns an Array containing only items with `isDone == true`


//every() or any()


erson = Ember.Object.extend({
  name: null,
  isHappy: false
});

let people = [
  Person.create({ name: 'Yehuda', isHappy: true }),
  Person.create({ name: 'Majd', isHappy: false })
];

people.every((person, index, self) => person.get('isHappy'));

//=> false

people.any((person, index, self) => person.get('isHappy'));

//=> true


//Like the filtering methods, the every() and any() methods have analogous isEvery() and isAny() methods.

people.isEvery('isHappy', true); // false
people.isAny('isHappy', true);  // true
