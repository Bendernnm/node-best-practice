const cluster = require('cluster');

const App = require('./app');

if (cluster.isMaster) {
  console.log('is master');
  cluster.fork();
  cluster.fork();
  cluster.fork();
  cluster.fork();
} else {
  console.log('is slave');
  App();
}
