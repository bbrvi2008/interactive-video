class Event {
  constructor(callback, isOnce) {
    this.isOnce = isOnce || false;
    this.callback = callback;
  }
}

export default class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
      if(!this.events[eventName]) {
        this.events[eventName] = [];
      }

      this.events[eventName].push(new Event(callback));
  }

  off(eventName, callback) {
      this.events[eventName] = this.events[eventName]
        .filter(fn => fn === callback);
  }

  once(eventName, callback) {
      console.log('once', eventName);

      if(!this.events[eventName]) {
        this.events[eventName] = [];
      }

      this.events[eventName].push(new Event(callback, true));
  }

  emit(eventName, ...args) {
    console.log('emit', eventName);
      let handlers = this.events[eventName];
      if(!handlers) return;

      handlers.forEach(event => {
        event.callback(...args);
      });

      this.events[eventName] = handlers.filter(event => {
        return !event.isOnce;
      });
  }
}