import Model, { attr, belongsTo } from '@ember-data/model';

export default class TicketModel extends Model {
  @attr status;
  @attr title;
  @belongsTo('user', { inverse: null }) developer;
  @belongsTo('user', { inverse: 'tickets' }) tester;
  @attr description;
  @attr date;
}
