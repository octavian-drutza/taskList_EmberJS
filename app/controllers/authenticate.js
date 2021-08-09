import Controller, { inject as controller } from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class AuthenticateController extends Controller {
  @controller application;
  @service('authentication') authentication;

  @action
  auth() {
    this.authentication.auth(300);
    console.log('i was called from controller');
  }
}
