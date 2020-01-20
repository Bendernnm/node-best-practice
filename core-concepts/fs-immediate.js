const fs = require('fs');
// const timer = require('./timer');

setTimeout(() => console.log('set timeout'), 0);

fs.readFile(__filename, () => {
  console.log('fs');
});

setImmediate(() => console.log('set immediate'));

// timer.sync(5000);
