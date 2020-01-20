const fs = require('fs');

console.log('start');

setTimeout(() => console.log('set timeout 1'), 0);

setImmediate(() => {
  console.log('set immediate 1');
  setTimeout(() => console.log('set timeout 4'), 0);
  setImmediate(() => console.log('set immediate 3'));
});

fs.readFile(__filename, () => {
  console.log('fs 1');

  setTimeout(() => console.log('set timeout 2'), 0);
  setImmediate(() => console.log('set immediate 2'));
  Promise.resolve().then(() => console.log('promise 5'));
  process.nextTick(() => console.log('nextTick 1'));
});

Promise.resolve().then(() => {
  console.log('promise 1');
  process.nextTick(() => console.log('nextTick 2'));
  Promise.resolve().then(() => console.log('promise 4'));
});

process.nextTick(() => {
  console.log('nextTick 3');
  Promise.resolve().then(() => console.log('promise 3'));
});

setTimeout(() => {
  console.log('set timeout 3');
  process.nextTick(() => console.log('nextTick 4'));
  Promise.resolve().then(() => console.log('promise 2'));
}, 0);

console.log('end');
