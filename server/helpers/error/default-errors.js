const ERROR_TYPES = require('./types');
const ERROR_CODES = require('./codes');
const AppError = require('./app-error');

module.exports.badRequest = ({ code, target, message = 'Bad Request' } = {}) => new AppError({
  status: 400,
  message,
  code,
  target,
});

module.exports.notValidParameter = ({ target, message = 'Bad Request' } = {}) => new AppError({
  target,
  message,
  status: 400,
  code  : ERROR_CODES.NOT_VALID_PARAMETER,
});

module.exports.unauthorized = ({ code, target, message = 'Unauthorized' } = {}) => new AppError({
  status: 401,
  message,
  code,
  target,
});

module.exports.forbidden = ({ code, target, message = 'Forbidden' } = {}) => new AppError({
  status: 403,
  message,
  code,
  target,
});

module.exports.notFound = ({ code, target, message = 'Not Found' } = {}) => new AppError({
  status: 404,
  message,
  code,
  target,
});

module.exports.notFoundObject = (object) => new AppError({
  status : 404,
  message: `${object} not found`,
  code   : ERROR_CODES.OBJECT_NOT_FOUND,
  target : object,
});

module.exports.payloadTooLarge = ({ code, target, message = 'Payload Too Large' } = {}) => new AppError({
  code,
  target,
  message,
  status: 413,
});

module.exports.unsupportedMediaType = ({ code, target, message = 'Unsupported Media Type' } = {}) => new AppError({
  code,
  target,
  message,
  status: 415,
});

module.exports.internalServerError = ({ code, target, message = 'Internal Server Error' } = {}) => new AppError({
  code,
  target,
  message,
  status: 500,
});

module.exports.serviceUnavailable = ({ code, target, message = 'Service Unavailable' } = {}) => new AppError({
  code,
  target,
  message,
  status: 503,
});

module.exports.validatorError = (data) => new AppError({
  status : 400,
  target : 'validator',
  data   : data.details,
  type   : ERROR_TYPES.VALIDATE,
  code   : ERROR_CODES.NOT_VALID_BODY,
  message: 'Validation failed',
});
