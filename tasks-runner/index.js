const EventEmitter = require('events');

const EVENTS = {
  START: 'start',
  GO   : 'go',
};

class TaskRunner extends EventEmitter {
  constructor() {
    super();
    this.EVENTS = EVENTS;
  }
}

// module.exports = new TaskRunner();

const taskRunner = new TaskRunner();

function addTask(taskName, handler) {
  taskRunner.on(taskName, handler);
}

function runTask(taskName, args) {
  taskRunner.emit(taskName, args);
}

addTask(EVENTS.START, (args) => console.log(`start ${args || '...'}`));
addTask(EVENTS.GO, (args) => console.log(`go ${args || '...'}`));

runTask(EVENTS.START, 3);
runTask(EVENTS.START, 2);
runTask(EVENTS.START, 1);
runTask(EVENTS.START);
runTask(EVENTS.GO);
runTask(EVENTS.GO, 'faster');
