const s1 = Symbol('name');
const s2 = Symbol('name');
const s3 = Symbol.for('name');
const s4 = Symbol.for('name');

console.log(s1 === s2);
console.log(s1 === s3);
console.log(s1 === s4);
console.log(s3 === s4);
