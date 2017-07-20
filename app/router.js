import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('posts');
  this.route('not-found', { path: '/*path' });
  this.route('post', { path: '/posts/:post_id' });
});

export default Router;
