import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class DeleteRoute extends Route {
  @service store;

  model(params) {
    return this.store.findRecord('ticket', params.id);
  }
}
