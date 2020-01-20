const fs = require('fs');

const size = 1024 * 1024 * 5;
const fileName = '5mb';

const buffer = Buffer.alloc(size).fill('a');

fs.writeFileSync(`../files/${fileName}`, buffer);
