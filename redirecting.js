//Transitioning Before the Model is Known
//app/router.js

Router.map(function(){
  this.route('posts');
});

//app/routes/index.js

import Ember from ember;

export default Ember.Route.Extend({
  beforeModel(){
    this.transitionTo('posts');
  }
})

//in this case index.hbs will trasition to posts.hbs

//Transitioning after the Model is Known

Router.map(function(){
  this.route('posts', function(){
    this.route('post', { path: '/post/:post_id' })
  });
});

//app/route/posts.js
import Ember from 'ember';

export default Ember.Route.extend({
  redirect(model, trasition){
    if (model.get('length') === 1){
      this.transitionTo('post', model.get('firstObject'));
    }
  }
});

//When transitioning to the posts route if it turns out that there is only one post, the current transition will be aborted in favor of redirecting to the PostRoute with the single post object being its model.
