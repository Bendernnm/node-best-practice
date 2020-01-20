const Joi = require('@hapi/joi');

const schemas = require('./schemas');

module.exports.Joi = Joi;
module.exports.schemas = schemas;
module.exports.validate = (object, schema) => Joi.validate(object, schema);
