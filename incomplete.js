import TodoListComponent from 'ember-shenanigans/computed-properties-aggregate-data';

let todoListComponent = TodoListComponent.crete();
todoListComponent.get('incomplete.length'); // 1

let todos = todoListComponent.get('todos');
let todo = todos.objectAt(1);
todo.set('isDone', true);
todoListComponent.get('incomplete.length'); // 0

todo = Ember.Object.create({ isDone: false });
todos.pushObject(todo);

todoListComponent.get('incomplete.length');
// 1


//Computed properties dependent on an array using the [] key will only update if items are added to or removed from the array, or if the array property is set to a different array. For example:

export default Ember.Component.extend({
  todos: [
    Ember.Object.create({ isDone: true }),
    Ember.Object.create({ isDone: false }),
    Ember.Object.create({ isDone: true })
  ],

  selectedTodo: null,
  indexOfSelectedTodo: Ember.computed('selectedTodo', 'todos.[]', function() {
    return this.get('todos').indexOf(this.get('selectedTodo'));
  })
});
