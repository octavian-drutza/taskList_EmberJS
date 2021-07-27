import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @service('types') types;
  @service('authentication') authentication;
  @service router;
  @service store;

  @action
  changeRoute(destination) {
    this.router.transitionTo(destination);
  }
}
