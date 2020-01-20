/* eslint-disable */
const logger = require('../logger');

const Errors = require('./default-errors');
const ERROR_TYPES = require('./types');
const AppError = require('./app-error');

const PORT = 4040;

module.exports.expressErrorHandler = (err, stack) => {
  logger.error(err.message, err);

  if (!err.custom) {
    err = new AppError({
	  ...err,
	  stack,
	  data   : err,
	  message: err.message,
	  type   : ERROR_TYPES.HTTP,
    });
  }

  if (err.status >= 500) {
    err = Errors.internalServerError();
  }

  return err;
};

// todo check later
module.exports.httpServerOnErrorHandler = (err) => {
  if (err.syscall !== 'listen') {
    throw new AppError({
	  ...err,
	  type: ERROR_TYPES.OPERATION,
	  data: { schedulerName: 'httpServerOnErrorHandler', ...err },
    });
  }

  const bind = typeof PORT === 'string'
	  ? `Pipe ${PORT}`
	  : `Port ${PORT}`;

  switch (err.code) {
    case 'EACCES':
	  logger.error(`${bind} requires elevated privileges`);
	  throw new AppError({
        ...err,
        type: ERROR_TYPES.OPERATION,
        data: { schedulerName: 'httpServerOnErrorHandler', ...err },
	  });
    case 'EADDRINUSE':
	  logger.error(`${bind} is already in user`);
	  throw new AppError({
        ...err,
        type: ERROR_TYPES.OPERATION,
        data: { schedulerName: 'httpServerOnErrorHandler', ...err },
	  });
    default:
	  throw new AppError({
        ...err,
        type: ERROR_TYPES.OPERATION,
        data: { schedulerName: 'httpServerOnErrorHandler', ...err },
	  });
  }
};

module.exports.unhandledRejection = (reason) => {
  logger.error(reason.message || 'unhandled rejection', reason);

  // eslint-disable-next-line no-process-exit
  process.exit(1);
};

module.exports.uncaughtException = (err) => {
  logger.error(err.message, err);

  // eslint-disable-next-line no-process-exit
  process.exit(1);
};
