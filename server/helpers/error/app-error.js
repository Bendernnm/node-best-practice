/* eslint-disable */
const CODES = require('./codes');
const ERROR_TYPES = require('./types');

function AppError({ status = 500, message, type = ERROR_TYPES.HTTP, data = {}, code = CODES.DEFAULT_CODE, stack, target, ...other } = {}) {
  Error.call(this, message);

  if (stack) {
	this.stack = stack;
  } else {
	Error.captureStackTrace(this);
  }

  this.code = code;
  this.type = type;
  this.custom = true;
  this.status = status;
  this.target = target;
  this.message = message;
  this.data = JSON.stringify(data);
  this.other = JSON.stringify(other);
}

AppError.prototype = Object.create(Error.prototype);

AppError.prototype.constructor = AppError;

AppError.isAppError = err => err instanceof AppError;

module.exports = AppError;
