const winston = require('winston');

const { format, transports, createLogger } = winston;

const defaultLevel = 'info'; // config.LOGGER_LEVEL

module.exports = createLogger({
  level     : defaultLevel,
  transports: [new transports.Console()],
  format    : format.combine(format.timestamp(), format.json()),
});
