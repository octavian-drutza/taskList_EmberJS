import Route from '@ember/routing/route';

export default class UserPreviewRoute extends Route {
  model(params) {
    return this.store.findRecord('user', params.id, { include: 'tickets' });
  }
}
