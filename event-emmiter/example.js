const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('event', () => {
  console.log('event block');
});

process.nextTick(() => eventEmitter.on('event', () => {
  console.log('event tick block');
}));

setTimeout(() => eventEmitter.emit('event'), 1000);

eventEmitter.emit('event');
