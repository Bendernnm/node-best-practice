new Promise((resolve) => {
  setTimeout(() => resolve(), 1000);
}).then(() => console.log('success resolve')).finally(() => console.log('finally resolve'));

new Promise((resolve, reject) => {
  setTimeout(() => reject(), 1000);
}).catch(() => console.log('error reject')).finally(() => console.log('finally reject'));
