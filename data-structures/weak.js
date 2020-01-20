const weakMap = new WeakMap();

let key1 = {};
const key2 = {};

weakMap.set(key1, 'value1');
weakMap.set(key2, 'value2');

console.log(`length = ${weakMap.length}`);

key1 = null;

console.log(`length = ${weakMap.length}`);
console.log(weakMap.get(key2));
