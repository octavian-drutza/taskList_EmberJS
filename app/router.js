import EmberRouter from '@ember/routing/router';
import config from 'task-list-ember-js/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('ticket', function () {
    this.route('add');
    this.route('edit', { path: 'edit/:id' });
    this.route('delete', { path: 'delete/:id' });
    this.route('preview', { path: 'ticket/:id' });
  });

  this.route('user', function () {
    this.route('add');
    this.route('preview', { path: 'user/:id' });
  });
});
