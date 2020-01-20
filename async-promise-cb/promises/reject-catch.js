try {
  new Promise((resolve, reject) => setTimeout(() => reject(new Error('error')), 1000))
    .then(() => console.log('then'))
    .catch(() => console.error('promise catch'));
} catch (err) {
  console.error('try catch');
}
