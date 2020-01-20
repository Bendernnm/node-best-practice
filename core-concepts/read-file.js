const fs = require('fs');

function someAsyncOperation(callback) {
  // Assume this takes 95ms to complete
  fs.readFile(__filename, callback);
}

const timeoutScheduled = Date.now();

setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;

  console.log(`${delay}ms have passed since I was scheduled`);
}, 100);


// do someAsyncOperation which takes 95 ms to complete
someAsyncOperation(() => {
  const startCallback = Date.now();

  console.log('read file');

  // do something that will take 10ms...
  while (Date.now() - startCallback < 10) {
    // do nothing
  }
});


// const _date = Date.now();
// while (Date.now() - _date < 1000) {
//   // do nothing
// }
