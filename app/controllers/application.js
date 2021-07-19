import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @service router;

  ticketTypes = [
    { status: 'backlog' },
    { status: 'in-development' },
    { status: 'in-testing' },
    { status: 'accepted' },
  ];

  @action
  changeRoute(destination) {
    this.router.transitionTo(destination);
  }
}
