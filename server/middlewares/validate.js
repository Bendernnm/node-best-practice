/* eslint-disable */
const validator = require('../helpers/validator');

const { Errors } = require('../helpers/error');

module.exports.schemas = validator.schemas;

module.exports.middleware = (schema) => (req, res, next) => {
  try {
	const { body } = req;

	const { error } = validator.validate(body, schema);

	if (error) {
	  throw Errors.validatorError(error);
	}

	next();
  } catch (err) {
	next(err);
  }
};
