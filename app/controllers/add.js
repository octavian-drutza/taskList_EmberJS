import Controller, { inject as controller } from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class AddController extends Controller {
  @controller application;
  @service('date') date;
  @service('types') types;
  @service store;

  @action
  create() {
    console.log(this.model);
    this.createTicket.date = this.date.date();
    this.createTicket.save().then(() => this.application.changeRoute('/'));
  }

  @action
  cancelCreation(path) {
    this.createTicket.destroyRecord();
    this.application.changeRoute(path);
  }
}
