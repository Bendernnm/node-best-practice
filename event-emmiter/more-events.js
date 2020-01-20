const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

for (let i = 0; i < 1000; i += 1) {
  eventEmitter.on(`event${i}`, () => {
    console.log(`event block ${i}`);
  });
}

eventEmitter.emit('event10');
