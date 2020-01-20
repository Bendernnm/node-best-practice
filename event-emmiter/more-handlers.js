const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

for (let i = 0; i < 11; i += 1) {
  eventEmitter.on('event', () => {
    console.log(`event block ${i}`);
  });
}
