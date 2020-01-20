const fs = require('fs');

console.log('start');

fs.readFile('../../files/1gb', () => console.log('progress'));

console.log('end');
