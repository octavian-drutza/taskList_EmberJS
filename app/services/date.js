import Service from '@ember/service';

export default class DateService extends Service {
  date() {
    let date = new Date();
    let settings = {
      day: 'numeric',
      month: '2-digit',
      year: 'numeric',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
    return date.toLocaleString([], settings);
  }
}
