export default Ember.Component.extend({
  todos: [
    Ember.Object.create({ isDone: true }),
    Ember.Object.create({ isDone: false }),
    Ember.Object.create({ isDone: true })
  ],

  incomplete: Ember.computed('todos.@each.isDone', function(){ //the dependent key todos.@each.isDone instructs Ember.js to update bindings and fire observers
    var todos = this.get('todos');
    return todos.filterBy('isDone', false);

    incomplete: Ember.computed.filterBy('todos', 'isDone', false) //is equal to the above
  });

});
