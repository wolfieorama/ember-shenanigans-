//2 way bindings
wife = Ember.Object.create({
  householdIncome: 80000;
});

Husband = Ember.Object.extend({
  householdIncome: Ember.computed.alias('wife.householdIncome')
});

husband = Husband.create({
  wife: wife
});

husband.get('householdIncome'); // 80000

// Someone gets raise.
wife.set('householdIncome', 90000);
husband.get('householdIncome'); // 90000

//1 way binding

user = Ember.Object.create({
  fullName: 'Kara Gates'
});

UserComponent = Ember.Component.extend({
  userName: Ember.computed.oneWay('user.fullName')
});

userComponent = UserComponent.create({
  user: user
});

// Changing the name of the user object changes
// the value on the view.
user.set('fullName', 'Krang Gates');
// userComponent.userName will become "Krang Gates"

// ...but changes to the view don't make it back to
// the object.
userComponent.set('userName', 'Truckasaurus Gates');
user.get('fullName'); // "Krang Gates"
