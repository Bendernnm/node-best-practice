const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const ONE_GB = 1024 * 1024 * 1024;

const size = 1024 * 1024 * 2;
const fileName = '2mb';

(async () => {
  let leastSize = size;

  while (leastSize > 0) {
    let writeSize;

    if (leastSize >= ONE_GB) {
      writeSize = ONE_GB;
      leastSize -= ONE_GB;
    } else {
      writeSize = leastSize;
      leastSize = 0;
    }

    const buffer = Buffer.alloc(writeSize, 'a');

    // eslint-disable-next-line no-await-in-loop
    await writeFileAsync(`../files/${fileName}`, buffer, { flag: 'a+' });
  }
})();
