/* eslint-disable */

Promise.resolve().then(() => {
  console.log('promise 1');                                               // 1
  process.nextTick(() => console.log('nextTick 1'));              // 2
  Promise.resolve().then(() => console.log('promise 2'));                 // 3
});

process.nextTick(() => console.log('nextTick 2'));

// 1, 2 3
