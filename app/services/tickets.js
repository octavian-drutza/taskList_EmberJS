import Service from '@ember/service';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';

export default class TicketsService extends Service {
  list = A([]);

  add(ticket) {
    this.list.pushObject(ticket);
  }

  remove(ticket) {
    this.list.removeObject(ticket);
    this.toLocalStorage();
  }

  toLocalStorage() {
    localStorage.setItem('tickets', JSON.stringify(this.list));
  }

  removeFromLocal() {
    localStorage.removeItem('tickets');
  }
}
