const fs = require('fs');
const util = require('util');
const express = require('express');

const readFileAsync = util.promisify(fs.readFile);

const timer = require('../helpers/timer');

const { Errors, ErrorHandlers, ERROR_CODES } = require('../helpers/error');

let str = 'abc';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send({ message: 'API ash 2.o', random: Math.random() });
});

router.get('/string', (req, res) => {
  str += 'def';

  res.status(200).json({ str });
});

router.get('/withoutResponse', () => {
});

router.get('/long/sync', (req, res) => {
  timer.sync(1000 * 15);

  res.status(200).json({ message: 'timer' });
});

router.get('/long/async', async (req, res) => {
  await timer.async(1000 * 15);

  res.status(200).json({ message: 'timer' });
});

router.get('/read/file/long', (req, res) => {
  const readStream = fs.createReadStream('../files/2mb.txt');

  readStream.on('data', (chunk) => {
    console.log('chunk');

    res.write(chunk);
  });

  readStream.on('end', () => {
    res.end();
  });
});

router.get('/read/file/long/pipe', (req, res) => {
  const readStream = fs.createReadStream('../files/2mb.txt');

  readStream.pipe(res);
});

router.get('/read/file/long/of', async (req, res) => {
  const readStream = fs.createReadStream('../files/2mb.txt');

  // eslint-disable-next-line no-restricted-syntax
  for await (const chunk of readStream) {
    res.write(chunk);
  }

  res.end();
});

router.get('/read/file/sync', (req, res, next) => {
  try {
    fs.readFileSync('../files/2gb');

    res.status(200).json({ message: 'Send file' });
  } catch (err) {
    next(err);
  }
});

router.get('/read/file/async', async (req, res, next) => {
  try {
    await readFileAsync('../files/2gb');

    res.status(200).json({ message: 'Send file' });
  } catch (err) {
    next(err);
  }
});

router.use((req, res, next) => next(Errors.notFound({
  code   : ERROR_CODES.INCORRECT_ROUTE,
  message: `NotFound: ${req.originalUrl}`,
})));

router.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const error = ErrorHandlers.expressErrorHandler(err);

  res.status(error.status).send(error);
});

module.exports = router;
