Router.map(function() {
  this.route('photos', function(){
    this.route('photo', { path: '/photos/:photo_id' }); //dynamic segment
  });
});

//app/routes/photo.js

import Ember from 'ember'

export default Ember.Route.extend({
  model(params){
    return this.get('store').findRecord('photo', params.photo_id);
  }
});


// this wont call the model hook

<h1>Photos</h1>
{{#each model as |photo|}}
  <p>
    {{#link-to 'photo' photo}}
      <img src="{{photo.thumbnailUrl}}" alt="{{photo.title}}" />
    {{/link-to}}
  </p>
{{/each}}

// this will call the model hook

<h1>Photos</h1>
{{#each model as |photo|}}
  <p>
    {{#link-to 'photo' photo.id}}
      <img src="{{photo.thumbnailUrl}}" alt="{{photo.title}}" />
    {{/link-to}}
  </p>
{{/each}}
