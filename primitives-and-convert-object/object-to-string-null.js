const a = {};

Object.prototype.toString = null;
Object.prototype.valueOf = () => 'qww';

console.log('' + a);
