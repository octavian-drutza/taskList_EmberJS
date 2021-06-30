import EmberRouter from '@ember/routing/router';
import config from 'task-list-ember-js/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('add');
  this.route('ticket', { path: 'ticket/:ticket_id' });
});
