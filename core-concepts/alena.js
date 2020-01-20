const fs = require('fs');
const http = require('http');

const options = {
  host: 'www.facebook.com',
  port: 80,
  path: '/index.html',
};

console.log('Start');
Promise.resolve().then(() => console.log('resolve'));
setTimeout(() => console.log('setTimeout 1'), 0);
setImmediate(() => console.log('setImmediate 1'));
process.nextTick(() => console.log('nextTick 1'));
setImmediate(() => console.log('setImmediate 2'));
process.nextTick(() => console.log('nextTick 2'));
http.get(options, () => console.log('IO 1'));
fs.readFile(__filename, () => console.log('IO 2'));
setImmediate(() => console.log('setImmediate 3'));
process.nextTick(() => console.log('nextTick 3'));
setImmediate(() => console.log('setImmediate 4'));
fs.readdir(__dirname, () => console.log('IO 3'));
setTimeout(() => console.log('setTimeout 2'), 1500);
console.log('Done');

// Start
// Done
// nextTick 1
// nextTick 2
// nextTick 3
// setTimeout 1
// setImmediate 1
// setImmediate 2
// setImmediate 3
// setImmediate 4
// [IO1 IO2 IO3 setTimeout 2]
