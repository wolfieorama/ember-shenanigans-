import Ember form 'ember';
import RSVP from 'rsvp';

export default Ember.Route.Extend({
  model(){
    return RSVP.hash({
      songs: this.get('store').findAll('song'),
      albums: this.get('store').findAll('album')
    });
  }
});

// in the template

<h1>Playlist</h1>

<ul>
  {{#each model.songs as |song|}}
    <li>{{song.name}} by {{song.artist}}</li>
  {{/each}}
</ul>

<h1>Albums</h1>

<ul>
  {{#each model.albums as |album|}}
    <li>{{album.title}} by {{album.artist}}</li>
  {{/each}}
</ul>
