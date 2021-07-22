import Controller, { inject as controller } from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class UserAddController extends Controller {
  @controller application;
  @service('date') date;
  @service('types') types;
  @service store;

  @action
  create() {
    this.createUser.save().then(() => this.application.changeRoute('/'));
  }

  @action
  cancelCreation(path) {
    this.createUser.destroyRecord();
    this.application.changeRoute(path);
  }
}
