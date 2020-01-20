const http = require('http');

const logger = require('./helpers/logger');
const { ErrorHandlers } = require('./helpers/error');

const App = require('./app');
// const app = require('./app')();

const PORT = 4040;
const HOST = '127.0.0.1';

process.on('uncaughtException', ErrorHandlers.uncaughtException);
process.on('unhandledRejection', ErrorHandlers.unhandledRejection);

const httpServer = http.createServer(App());

httpServer.on('error', ErrorHandlers.httpServerOnErrorHandler);
httpServer.on('listening', () => logger.info(`http://${HOST}:${PORT}`));

httpServer.listen(PORT, HOST);
