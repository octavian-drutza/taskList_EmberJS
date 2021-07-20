import Model, { attr, belongsTo } from '@ember-data/model';

export default class TicketModel extends Model {
  @belongsTo('user') user;
  @attr status;
  @attr title;
  @attr developer;
  @attr tester;
  @attr description;
  @attr date;
}
