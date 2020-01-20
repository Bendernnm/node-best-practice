const a = { _p2: 5 };

Object.defineProperty(a, 'p1', {
  configurable: true,
  enumerable  : true,
  writable    : true,
  value       : 2,
});

Object.defineProperty(a, 'p2', {
  configurable: true,
  enumerable  : true,
  get() {
    return a._p2;
  },
  set(v) {
    a._p2 = v;
  },
});

console.log(a);
console.log(a.p2);

a.p1 = 3;
a.p2 = 3;

console.log(a);
console.log(a.p2);
