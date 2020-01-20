const crypto = require('crypto');
const util = require('util');

const start = process.hrtime();

process.env.NODE_ENV = 'production';
process.env.UV_THREADPOOL_SIZE = 4;

for (let i = 0; i < 12; i += 1) {
  crypto.pbkdf2('secret', 'salt', 100000, 512, 'sha512', (err) => {
    if (err) {
      throw err;
    }

    const end = process.hrtime(start);

    console.log(util.format('crypto %d start %d end %d execute %d', i, end[0], end[1], end[0] + end[1] / 1e9));
  });
}
