import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AuthenticationService extends Service {
  @service router;
  @service store;
  @tracked loged = null;
  @tracked alert = false;
  logData = {};

  get cookie() {
    return document.cookie.split('=')[1];
  }

  @action
  logOut() {
    this.loged = null;
    this.unCook();
  }

  auth(interval) {
    this.store
      .query('user', {
        filter: { name: this.logData.name, email: this.logData.email },
      })
      .then((users) => {
        let user = users.get('firstObject');
        if (user) {
          this.loged = user;
          this.logIn(interval);
          this.router.transitionTo('/');
        } else {
          this.alert = true;
        }
      });
  }

  reAuth() {
    if (document.cookie && document.cookie.split('=')[0] === 'username') {
      this.store
        .queryRecord('user', { filter: { name: this.cookie } })
        .then((user) => {
          this.loged = user;
        });
    }
  }

  cook(username, expiration) {
    document.cookie = `username=${username};max-age=${expiration}`;
    console.log(document.cookie.toString() === 'username=user');
  }

  unCook() {
    document.cookie = 'username=;max-age=0;';
    console.log(document.cookie);
  }

  logIn(expiration) {
    this.cook(this.loged.name, expiration);
  }
}
