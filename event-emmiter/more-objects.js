const EventEmitter = require('events');

const objects = [];

for (let i = 0; i < 1000; i += 1) {
  const eventEmitter = new EventEmitter();

  eventEmitter.on('event', () => {
    console.log('event block');
  });

  objects.push(eventEmitter);
}

objects[999].emit('event');
