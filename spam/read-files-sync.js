const request = require('./request');

const optsRoot = {
  method: 'GET',
  url   : 'http://127.0.0.1:4040',
};
const optsFile = {
  method: 'GET',
  url   : 'http://127.0.0.1:4040/read/file/sync',
};

request(optsFile).catch(console.error);

setTimeout(() => request(optsRoot).catch(console.error), 150);
