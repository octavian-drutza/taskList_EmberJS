import Service from '@ember/service';
import { A } from '@ember/array';

export default class TicketsService extends Service {
  list = A([]);

  add(ticket) {
    this.list.pushObject(ticket);
    this.toLocalStorage();
  }

  remove(ticket) {
    this.list.removeObject(ticket);
    this.toLocalStorage();
  }

  /*   update(index, newTicket) {
    this.list[index] = newTicket;
  } */

  toLocalStorage() {
    localStorage.setItem('tickets', JSON.stringify(this.list));
  }

  removeFromLocal() {
    localStorage.removeItem('tickets');
  }
}
