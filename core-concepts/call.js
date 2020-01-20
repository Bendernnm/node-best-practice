const fs = require('fs');

const sync = (duration) => {
  const startAt = Date.now();

  while (Date.now() - startAt < duration) ;
};

setTimeout(() => console.log('timer'), 4000);

fs.readFile('../files/5mb', () => console.log('fs'));

process.nextTick(() => console.log('tick'));

sync(5000);
