const qs = require('qs');
const path = require('path');

const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const lodashTemplates = require('lodash-express');

const { rootLimit } = require('./middlewares/rate-limit');

const routes = require('./routes');

module.exports = () => {
  const app = express();

  // templating
  lodashTemplates(app, 'html');
  app.set('view engine', 'html');
  app.set('query parser', (str) => qs.parse(str, { decode: (s) => decodeURIComponent(s) }));

  app.enable('trust proxy');
  app.disable('x-powered-by');

  // requests limit
  // app.use(rootLimit);

  // static
  app.use('/public', express.static(path.join(__dirname, 'public')));

  // middle wares
  app.use(cors());
  app.use(helmet());
  app.use(bodyParser.json({ limit: '500kb' }));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(morgan('dev'));

  // routes
  app.use(routes);

  return app;
};
