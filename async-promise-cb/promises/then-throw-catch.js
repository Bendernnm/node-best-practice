process.on('unhandledRejection', (err) => {
  console.error('unhandledRejection');
});

try {
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  }).then(() => {
    console.log('then');
    throw new Error('error');
  }).catch(() => console.error('promise catch'));
} catch (err) {
  console.error('try catch');
}
