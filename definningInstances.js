const Person = Ember.Object.extend({ //this defines a Person class with a say() method.
  say(thing){
    alert(`${this.get('name')} says: ${thing}`);
  }
});

let person = Person.create({
  name: 'Tom Dale' // initialize the values of its properties by passing an optional hash to the create() method:
});
person.say('Hello'); //alert "Tom Dale says: Hello"

//By convention, properties or variables that hold classes are PascalCased, while instances are not. So, for example, the variable Person would point to a class, while person would point to an instance (usually of the Person class). You should stick to these naming conventions in your Ember applications.
