import Model, { attr } from '@ember-data/model';

export default class TicketModel extends Model {
  @attr status;
  @attr title;
  @attr developer;
  @attr tester;
  @attr description;
  @attr date;
}
