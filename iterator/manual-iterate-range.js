const Range = require('./range');

const range = new Range(1, 5);

const result = [
  range[Symbol.iterator]().next(),
  range[Symbol.iterator]().next(),
  range[Symbol.iterator]().next(),
  range[Symbol.iterator]().next(),
  range[Symbol.iterator]().next(),
  range[Symbol.iterator]().next(),
  range[Symbol.iterator]().next(),
];

console.log(result);
