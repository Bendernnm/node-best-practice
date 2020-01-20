const RateLimit = require('express-rate-limit');

const rootLimit = new RateLimit({
  max: 100,
  windowMs: 1 * 60 * 1000,
});

module.exports = { rootLimit };
