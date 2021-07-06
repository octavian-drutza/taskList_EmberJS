import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class EditController extends Controller {
  @service router;

  @action
  changeRoute() {
    this.router.transitionTo('/');
  }

  @action
  submitChanges() {
    console.log('i changed');
  }
}
