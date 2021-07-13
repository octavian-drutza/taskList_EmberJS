import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service('tickets') tickets;

  ticketTypes = [
    { status: 'backlog' },
    { status: 'in-development' },
    { status: 'in-testing' },
    { status: 'accepted' },
  ];
}
