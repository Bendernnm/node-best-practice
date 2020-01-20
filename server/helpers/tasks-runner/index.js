const EventEmitter = require('events');

const EVENTS = {
  EVENTS: {
    FILES: {
      DELETE_FROM_TMP   : 'delete-from-tmp',
      DELETE_FROM_TMP_DB: 'delete-from-tmp-db',
    },
    CHECK: {
      AUTO_CHECK_OUT: 'auto-check-out',
    },
  },
};

class TaskRunner extends EventEmitter {
  constructor() {
    super();
    this.EVENTS = EVENTS;
  }

  on(eventName, listener) {
    return super.on(eventName, listener);
  }

  emit(eventName, ...args) {
    return super.emit(eventName, ...args);
  }
}

module.exports = new TaskRunner();
