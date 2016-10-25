Router.map(function() {
  this.route('blog-post', { path: '/blog-post' }); //dasherize the route name
});

//nesting routes

Router.map(function() {
  this.route('posts', function() {
    this.route('new'); //nested routes are called with the ancestors names transitionTo(posts.new)
  });
}); // this also can be generated with ember generate route posts/new if the posts route already exists


//wildcard - globbing routes

Router.map(function() {
  this.route('page-not-found', { path: '/*wildcard' });
});
