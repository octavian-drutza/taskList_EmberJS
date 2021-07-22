import Controller, { inject as controller } from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class TicketDeleteController extends Controller {
  @service('dialog') dialog;
  @controller application;
  @service store;

  @action
  delete() {
    this.model.destroyRecord();
    this.application.changeRoute('/');
  }
}
