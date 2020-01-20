const express = require('express');

const syncTimer = require('./sync-timer');

const PORT = 4040;
const HOST = '127.0.0.1';

module.exports = () => {
  const app = express();

  app.get('/', (req, res) => {
    res.status(200).send({ message: 'Hi bro' });
  });

  app.get('/long', (req, res) => {
    syncTimer(10000);

    res.status(200).send({ message: 'Hi bro' });
  });

  app.listen(PORT, HOST, () => console.log(`Server started on: http://${HOST}:${PORT}`));

  return app;
};
