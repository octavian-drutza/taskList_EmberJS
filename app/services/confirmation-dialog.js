import Service from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ConfirmationDialogService extends Service {
  @tracked state = false;

  @action
  openDialog() {
    this.state = true;
  }

  @action
  closeDialog() {
    this.state = false;
  }
}
