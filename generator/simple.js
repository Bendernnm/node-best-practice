function* simpleRange() {
  yield 1;
  yield 2;
  return 3;
}

const iterator = simpleRange();

const result = [
  iterator.next(),
  iterator.next(),
  iterator.next(),
  iterator.next(),
  iterator.next(),
];

console.log(iterator);
console.log(result);
