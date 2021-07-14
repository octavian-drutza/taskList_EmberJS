import Controller, { inject as controller } from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class DeleteController extends Controller {
  @service('tickets') tickets;
  @service('dialog') dialog;
  @controller application;

  @action
  delete() {
    this.tickets.remove(this.model);
    this.application.changeRoute('/');
  }
}
