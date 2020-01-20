const request = require('./request');

setInterval(async () => {
  const opts = {
    method: 'GET',
    url   : 'http://127.0.0.1:4040/withoutResponse',
  };

  for (let i = 0; i < 1000; i += 1) {
    request(opts).catch(console.error);
  }
}, 1000);
