import Controller, { inject as controller } from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class UserAddController extends Controller {
  @controller application;
  @service('date') date;
  @service('types') types;
  @service store;
  @tracked alert = false;
  @tracked message = '';

  @action
  checkThenCreate() {
    this.store
      .queryRecord('user', { filter: { name: this.createUser.name } })
      .then((usernameUsed) => {
        if (usernameUsed) {
          this.startAlert('username');
        } else {
          this.store
            .queryRecord('user', { filter: { email: this.createUser.email } })
            .then((emailUsed) => {
              if (emailUsed) {
                this.startAlert('email');
              } else {
                this.create();
              }
            });
        }
      });
  }

  @action
  cancelCreation(path) {
    this.createUser.destroyRecord();
    this.application.changeRoute(path);
  }

  startAlert(toCheck) {
    this.alert = true;
    this.message = `This ${toCheck} is already in use`;
  }

  create() {
    this.createUser.set('created', this.date.date());
    this.createUser.save().then(() => this.application.changeRoute('/'));
  }
}
