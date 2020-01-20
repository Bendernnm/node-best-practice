process.on('uncaughtException', (err) => {
  console.error('uncaughtException');
});

try {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      throw new Error('error');
    }, 1000);
  }).then(() => console.log('then'))
      .catch(() => console.error('promise catch'));
} catch (err) {
  console.error('try catch');
}
