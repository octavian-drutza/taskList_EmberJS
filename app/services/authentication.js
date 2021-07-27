import Service from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class AuthenticationService extends Service {
  @service router;
  @service store;
  @tracked isAuth = false;
  @tracked loged = null;
  @tracked logData = null;
  @tracked message = '';
  @tracked alert = false;

  @action
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
          this.message = 'Wrong credentials!';
        }
      });
  }

  @action
  reAuth() {
    if (document.cookie && document.cookie.split('=')[0] === 'username') {
      this.store
        .query('user', { filter: { name: this.getCookie() } })
        .then((users) => {
          this.loged = users.get('firstObject');
          this.isAuth = true;
        });
    }
  }

  @action
  getCookie() {
    return document.cookie.split('=')[1];
  }

  @action
  unCook() {
    document.cookie = 'username=;max-age=0;';
  }

  @action
  cook(username, expiration) {
    document.cookie = `username=${username};max-age=${expiration}`;
  }

  @action
  logIn(expiration) {
    this.isAuth = true;
    this.cook(this.loged.name, expiration);
  }

  @action
  logOut() {
    this.isAuth = false;
    this.loged = null;
    this.unCook();
  }
}
