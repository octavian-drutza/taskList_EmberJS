import Controller, { inject as controller } from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class TicketEditController extends Controller {
  @service('date') date;
  @service('dialog') dialog;
  @service('types') types;
  @controller application;
  @service store;

  @action
  saveChanges() {
    this.ticket.save().then(() => this.application.changeRoute('/'));
    this.dialog.closeDialog();
  }

  @action
  discardChanges(path) {
    this.ticket.rollbackAttributes();
    this.application.changeRoute(path);
  }
}
