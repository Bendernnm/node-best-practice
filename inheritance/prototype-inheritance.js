function A(a) {
  this.a = a;
}

A.prototype.returnTrue = () => true;

function B(b) {
  this.b = b;
}

B.prototype.constructor = B;
B.prototype = Object.create(A.prototype);
// B.prototype.__proto__ = A.prototype;

A.prototype.returnFalse = () => false;

const a = new A(1);
const b = new B(1);

console.log(a);
console.log(b);

// check prototype and __proto__ chain...
