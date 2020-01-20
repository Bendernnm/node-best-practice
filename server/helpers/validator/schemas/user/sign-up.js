const Joi = require('@hapi/joi');

module.exports = Joi.object().keys({
  email        : Joi.string().required().email(),
  userName     : Joi.string().required().min(3).max(25),
  firstName    : Joi.string().required().min(3).max(25),
  lastName     : Joi.string().required().min(3).max(25),
  phone        : Joi.string().required().min(3).max(15),
  company      : Joi.string().required().min(3).max(25),
  description  : Joi.string().min(1).max(150),
  memberStartAt: Joi.number().required(),
  memberEndAt  : Joi.number().required(),
  password     : Joi.string().required().min(8).max(16),
}).strict();
