import Controller, { inject as controller } from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AuthenticateController extends Controller {
  @controller application;
  @service('date') date;
  @service('authentication') authentication;
  @service store;
  logData = {};

  @action
  auth() {
    this.authentication.alert = false;
    this.authentication.set('logData', this.logData);
    this.authentication.auth(300);
  }
}
