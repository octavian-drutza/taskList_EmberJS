import Controller, { inject as controller } from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class EditController extends Controller {
  @service('date') date;
  @service('dialog') dialog;
  @service('types') types;
  @controller application;
  @service store;

  @action
  saveChanges() {
    this.model.ticket.save().then(() => this.application.changeRoute('/'));
  }

  @action
  discardChanges(path) {
    this.model.ticket.rollbackAttributes();
    this.application.changeRoute(path);
  }
}
