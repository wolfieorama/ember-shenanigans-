Person.reopen({
  isPerson: true

  say(thing){   // override `say` to add an ! at the end
    this._super(thing+ '!');
  }
});

Person.create().get('isPerson'); //this should return true

// add static property to class
Person.reopenClass({
  isPerson: false
});
// override property of Person instance
Person.reopen({
  isPerson: true
});

Person.isPerson; // false - because it is static property created by `reopenClass`
Person.create().get('isPerson'); // true
