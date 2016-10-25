//app/router.js

Router.map(function(){
  this.route('favourite-posts');
});


//app/routes/favourite-posts.js

import Ember from 'ember';

export default Ember.Route.Extend({
  model(){
    return this.get('store').query('post', { favourite: true });
  }
});

//app/templates/favorite-posts.hbs

<h1>Favorite Posts</h1>
{{#each model as |post|}}
  <p>{{post.body}}</p>
{{/each}}
